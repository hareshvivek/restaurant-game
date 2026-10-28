import * as THREE from 'three';
import { CookingStation } from './station';
import { PlayerInventory } from './inventory';
import { RECIPES } from './recipes';
import { INGREDIENTS } from './ingredients';
import { CarriedItem, StationType } from './types';
import { sounds } from '../audio';

export interface CookingManagerCallbacks {
  onInventoryChange: (item: CarriedItem | null) => void;
  onOpenStorageModal: (stationType: StationType, onSelectItem: (id: string) => void) => void;
  onShowCookingToast: (message: string, icon?: string) => void;
}

export class CookingManager {
  public inventory: PlayerInventory;
  public stations: Map<string, CookingStation> = new Map();
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene, private callbacks: CookingManagerCallbacks) {
    this.scene = scene;
    this.inventory = new PlayerInventory();
    this.inventory.subscribe((item) => {
      this.callbacks.onInventoryChange(item);
    });

    this.initStations();
  }

  public getCarriedItem(): CarriedItem | null {
    return this.inventory.getCarriedItem();
  }

  public clearCarriedItem() {
    this.inventory.clear();
  }

  private initStations() {
    // Register the cooking and kitchen stations at their designated 3D world locations
    const stationDefs: Array<{ id: string; name: string; type: StationType; pos: THREE.Vector3 }> = [
      {
        id: 'station-prep',
        name: 'Prep & Assembly Board',
        type: 'prep_table',
        pos: new THREE.Vector3(11.5, 0, -8.0)
      },
      {
        id: 'station-stove',
        name: 'Stovetop Range & Grill',
        type: 'stovetop_grill',
        pos: new THREE.Vector3(6.5, 0, -12.5)
      },
      {
        id: 'station-oven',
        name: 'Stone Pizza Oven',
        type: 'pizza_oven',
        pos: new THREE.Vector3(10.5, 0, -12.5)
      },
      {
        id: 'station-fryer',
        name: 'Commercial Deep Fryer',
        type: 'deep_fryer',
        pos: new THREE.Vector3(13.2, 0, -12.5)
      },
      {
        id: 'station-fridge',
        name: 'Cold Storage / Chiller',
        type: 'storage_fridge',
        pos: new THREE.Vector3(4.3, 0, -8.5)
      },
      {
        id: 'station-pantry',
        name: 'Dry Grain & Dough Pantry',
        type: 'storage_pantry',
        pos: new THREE.Vector3(16.5, 0, -8.5)
      },
      {
        id: 'station-produce',
        name: 'Fresh Farm Produce Bin',
        type: 'storage_produce',
        pos: new THREE.Vector3(16.5, 0, -5.5)
      },
      {
        id: 'station-trash',
        name: 'Kitchen Waste Disposal',
        type: 'trash_bin',
        pos: new THREE.Vector3(4.5, 0, -5.0)
      }
    ];

    for (const def of stationDefs) {
      const station = new CookingStation(def.id, def.name, def.type, def.pos);
      this.stations.set(def.id, station);
      this.scene.add(station.badgeGroup);
    }
  }

  public update(delta: number) {
    this.stations.forEach(station => {
      station.update(
        delta,
        () => {
          sounds.playBell();
          this.callbacks.onShowCookingToast(`✨ ${station.name}: Dish is Ready!`, station.currentOutput?.icon);
        },
        () => {
          sounds.playBurnSizzle();
          this.callbacks.onShowCookingToast(`🔥 Alert: Food on ${station.name} has burnt!`, '🔥');
        }
      );
    });
  }

  public getStation(id: string): CookingStation | undefined {
    return this.stations.get(id);
  }

  /**
   * Generates contextual interaction prompt based on what player is holding and station state
   */
  public getInteractionPrompt(stationId: string): string | null {
    const station = this.stations.get(stationId);
    if (!station) return null;

    const carried = this.inventory.getCarriedItem();

    // Storage Stations
    if (station.type.startsWith('storage_')) {
      if (carried && carried.type === 'ingredient') {
        return `Restock ${carried.name} into Storage`;
      }
      return `Open ${station.name}`;
    }

    // Trash Bin
    if (station.type === 'trash_bin') {
      if (carried) {
        return `Discard ${carried.name} in Trash`;
      }
      return 'Kitchen Waste Bin (Empty)';
    }

    // Cooking Stations: Stovetop, Oven, Deep Fryer
    if (['stovetop_grill', 'pizza_oven', 'deep_fryer'].includes(station.type)) {
      if (station.state === 'BURNT') {
        return `Clean & Clear ${station.name}`;
      }
      if (station.state === 'READY') {
        return `Collect ${station.currentOutput?.name || 'Cooked Meal'}`;
      }
      if (station.state === 'COOKING') {
        return `Cooking in progress (${Math.floor((station.cookTimer / station.targetCookTime) * 100)}%)`;
      }

      // Idle state: Check if carried item can be cooked here
      if (carried) {
        if (station.type === 'stovetop_grill') {
          if (carried.id === 'raw_patty') return 'Grill Beef Patty on Stove';
          if (carried.id === 'pasta_noodles') return 'Boil Fettuccine & Sauce';
          if (carried.id === 'tomato_sauce') return 'Simmer Tomato Sauce';
        } else if (station.type === 'pizza_oven') {
          if (carried.id === 'raw_pizza') return 'Slide Pizza into Oven';
        } else if (station.type === 'deep_fryer') {
          if (carried.id === 'battered_chicken') return 'Lower Chicken into Hot Oil';
        }
      }
      return `Examine ${station.name}`;
    }

    // Prep & Assembly Board
    if (station.type === 'prep_table') {
      if (station.state === 'READY') {
        return `Collect ${station.currentOutput?.name || 'Prepped Dish'}`;
      }

      if (carried) {
        return `Add ${carried.name} to Prep Board`;
      }

      if (station.loadedItems.length > 0) {
        return `Take Back ${station.loadedItems[station.loadedItems.length - 1].name} from Board`;
      }

      return 'Examine Prep & Assembly Board';
    }

    return null;
  }

  /**
   * Executes interaction when player presses 'E' at a station
   */
  public handleInteraction(stationId: string): boolean {
    const station = this.stations.get(stationId);
    if (!station) return false;

    const carried = this.inventory.getCarriedItem();

    // 1. Trash Bin
    if (station.type === 'trash_bin') {
      if (carried) {
        sounds.playTrashDrop();
        this.inventory.clear();
        this.callbacks.onShowCookingToast(`Discarded ${carried.name} in waste bin.`, '🗑️');
        return true;
      }
      this.callbacks.onShowCookingToast('Hands are already empty.', 'ℹ️');
      return true;
    }

    // 2. Storage Stations (Pantry, Fridge, Produce)
    if (station.type.startsWith('storage_')) {
      if (carried && carried.type === 'ingredient') {
        sounds.playPickup();
        this.inventory.clear();
        this.callbacks.onShowCookingToast(`Restocked ${carried.name} into storage.`, '📦');
        return true;
      }

      // Open supply selection dialog
      this.callbacks.onOpenStorageModal(station.type, (selectedIngredientId: string) => {
        const ing = INGREDIENTS[selectedIngredientId];
        if (ing) {
          sounds.playPickup();
          this.inventory.setCarriedItem({
            id: ing.id,
            name: ing.name,
            icon: ing.icon,
            type: 'ingredient'
          });
          this.callbacks.onShowCookingToast(`Collected ${ing.name}`, ing.icon);
        }
      });
      return true;
    }

    // 3. Collect Ready Dish / Clean Burnt Food
    if (station.state === 'READY' && station.currentOutput) {
      if (carried) {
        this.callbacks.onShowCookingToast('Hands are full! Empty your hands before collecting.', '⚠️');
        return true;
      }
      const collected = station.currentOutput;
      sounds.playPickup();
      this.inventory.setCarriedItem(collected);
      station.reset();
      this.callbacks.onShowCookingToast(`Collected ${collected.name}!`, collected.icon);
      return true;
    }

    if (station.state === 'BURNT') {
      sounds.playTrashDrop();
      station.reset();
      this.callbacks.onShowCookingToast(`Cleaned and scraped ${station.name}.`, '✨');
      return true;
    }

    if (station.state === 'COOKING') {
      this.callbacks.onShowCookingToast(`${station.name} is currently cooking! Please wait.`, '⏳');
      return true;
    }

    // 4. Stovetop / Grill cooking
    if (station.type === 'stovetop_grill') {
      if (!carried) {
        this.callbacks.onShowCookingToast('Bring Raw Beef Patty or Pasta Noodles to cook here.', 'ℹ️');
        return true;
      }

      if (carried.id === 'raw_patty') {
        this.inventory.clear();
        sounds.playSizzle();
        station.state = 'COOKING';
        station.targetCookTime = 5.5;
        station.targetBurnTime = 7.5;
        station.currentOutput = {
          id: 'cooked_patty',
          name: 'Grilled Beef Patty',
          icon: '🥩',
          type: 'intermediate',
          recipeId: 'burger'
        };
        station.updateBadgeTexture();
        this.callbacks.onShowCookingToast('Sizzling beef patty on the grill...', '🥩');
        return true;
      }

      if (carried.id === 'pasta_noodles' || carried.id === 'tomato_sauce') {
        this.inventory.clear();
        sounds.playSizzle();
        station.state = 'COOKING';
        station.targetCookTime = 5.5;
        station.targetBurnTime = 7.5;
        station.currentOutput = {
          id: 'simmered_pasta',
          name: 'Simmered Pasta Marinara',
          icon: '🍲',
          type: 'intermediate',
          recipeId: 'pasta'
        };
        station.updateBadgeTexture();
        this.callbacks.onShowCookingToast('Simmering fettuccine and marinara sauce on the burner...', '🍲');
        return true;
      }
    }

    // 5. Pizza Deck Oven
    if (station.type === 'pizza_oven') {
      if (carried && carried.id === 'raw_pizza') {
        this.inventory.clear();
        sounds.playOvenRoar();
        station.state = 'COOKING';
        station.targetCookTime = 6.5;
        station.targetBurnTime = 8.0;
        station.currentOutput = {
          id: 'dish_pizza',
          name: 'Crispy Pepperoni Pizza',
          icon: '🍕',
          type: 'dish',
          recipeId: 'pizza'
        };
        station.updateBadgeTexture();
        this.callbacks.onShowCookingToast('Baking pizza in stone deck oven...', '🍕');
        return true;
      }
      this.callbacks.onShowCookingToast('Assemble Unbaked Pizza at the Prep Board first, then bring it here!', 'ℹ️');
      return true;
    }

    // 6. Deep Fryer
    if (station.type === 'deep_fryer') {
      if (carried && carried.id === 'battered_chicken') {
        this.inventory.clear();
        sounds.playFryerBubbling();
        station.state = 'COOKING';
        station.targetCookTime = 6.0;
        station.targetBurnTime = 8.0;
        station.currentOutput = {
          id: 'dish_chicken',
          name: 'Crispy Fried Chicken',
          icon: '🍗',
          type: 'dish',
          recipeId: 'fried_chicken'
        };
        station.updateBadgeTexture();
        this.callbacks.onShowCookingToast('Lowered chicken into bubbling fryer oil...', '🍗');
        return true;
      }
      this.callbacks.onShowCookingToast('Dredge Raw Chicken in Flour Batter at Prep Board first!', 'ℹ️');
      return true;
    }

    // 7. Prep & Assembly Board
    if (station.type === 'prep_table') {
      if (carried) {
        station.loadedItems.push(carried);
        sounds.playChop();
        this.inventory.clear();
        station.state = 'PREPARING';

        // Check if loaded items complete any recipe or intermediate
        this.checkPrepAssembly(station);
        station.updateBadgeTexture();
        return true;
      }

      if (station.loadedItems.length > 0) {
        const item = station.loadedItems.pop()!;
        this.inventory.setCarriedItem(item);
        sounds.playPickup();
        if (station.loadedItems.length === 0) {
          station.reset();
        } else {
          station.updateBadgeTexture();
        }
        this.callbacks.onShowCookingToast(`Took back ${item.name} from board.`, item.icon);
        return true;
      }

      this.callbacks.onShowCookingToast('Place ingredients here to assemble Pizza, Burger, Pasta, Sandwich, or dredge Chicken.', 'ℹ️');
      return true;
    }

    return false;
  }

  /**
   * Checks if current items on prep board match any recipe recipe combination
   */
  private checkPrepAssembly(station: CookingStation) {
    const loadedIds = station.loadedItems.map(i => i.id);

    // 1. Unbaked Pizza: dough + tomato_sauce + cheese + pepperoni
    if (this.hasAll(loadedIds, ['dough', 'tomato_sauce', 'cheese', 'pepperoni'])) {
      station.state = 'READY';
      station.currentOutput = {
        id: 'raw_pizza',
        name: 'Unbaked Pepperoni Pizza',
        icon: '🫓',
        type: 'intermediate',
        recipeId: 'pizza'
      };
      station.loadedItems = [];
      sounds.playBell();
      this.callbacks.onShowCookingToast('Assembled Unbaked Pizza! Take it to the Pizza Oven to bake.', '🫓');
      return;
    }

    // 2. Deluxe Burger: burger_bun + cooked_patty + cheese + lettuce + tomato
    if (this.hasAll(loadedIds, ['burger_bun', 'cooked_patty', 'cheese', 'lettuce', 'tomato'])) {
      station.state = 'READY';
      station.currentOutput = {
        id: 'dish_burger',
        name: 'Deluxe Cheeseburger',
        icon: '🍔',
        type: 'dish',
        recipeId: 'burger'
      };
      station.loadedItems = [];
      sounds.playBell();
      this.callbacks.onShowCookingToast('Deluxe Cheeseburger assembled! Ready to serve.', '🍔');
      return;
    }

    // 3. Pasta Finishing: simmered_pasta + cheese
    if (this.hasAll(loadedIds, ['simmered_pasta', 'cheese'])) {
      station.state = 'READY';
      station.currentOutput = {
        id: 'dish_pasta',
        name: 'Parmesan Pasta Marinara',
        icon: '🍝',
        type: 'dish',
        recipeId: 'pasta'
      };
      station.loadedItems = [];
      sounds.playBell();
      this.callbacks.onShowCookingToast('Parmesan Pasta Marinara finished! Ready to serve.', '🍝');
      return;
    }

    // 4. Artisan Club Sandwich: sliced_bread + deli_meat + cheese + lettuce + tomato
    if (this.hasAll(loadedIds, ['sliced_bread', 'deli_meat', 'cheese', 'lettuce', 'tomato'])) {
      station.state = 'READY';
      station.currentOutput = {
        id: 'dish_sandwich',
        name: 'Artisan Club Sandwich',
        icon: '🥪',
        type: 'dish',
        recipeId: 'sandwich'
      };
      station.loadedItems = [];
      sounds.playBell();
      this.callbacks.onShowCookingToast('Artisan Club Sandwich assembled! Ready to serve.', '🥪');
      return;
    }

    // 5. Battered Chicken: raw_chicken + flour_batter
    if (this.hasAll(loadedIds, ['raw_chicken', 'flour_batter'])) {
      station.state = 'READY';
      station.currentOutput = {
        id: 'battered_chicken',
        name: 'Battered Raw Chicken',
        icon: '🥣',
        type: 'intermediate',
        recipeId: 'fried_chicken'
      };
      station.loadedItems = [];
      sounds.playBell();
      this.callbacks.onShowCookingToast('Chicken dredged in batter! Take it to the Deep Fryer.', '🥣');
      return;
    }

    this.callbacks.onShowCookingToast(`Added ${station.loadedItems[station.loadedItems.length - 1].name} to board (${station.loadedItems.length} loaded).`, '🔪');
  }

  private hasAll(array: string[], required: string[]): boolean {
    return required.every(req => array.includes(req));
  }
}

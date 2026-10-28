import * as THREE from 'three';
import { ChefMesh, ChefConfig } from './chefMesh';
import { PickupCounter, ReadyDish } from './pickupCounter';
import { CustomerOrder } from '../customers/types';
import { RECIPES } from '../cooking/recipes';
import { Recipe } from '../cooking/types';
import { sounds } from '../audio';

interface Point2D {
  x: number;
  z: number;
}

type ChefState =
  | 'IDLE'
  | 'WALKING_TO_PREP'
  | 'PREPPING'
  | 'WALKING_TO_COOK'
  | 'COOKING'
  | 'WALKING_TO_PICKUP'
  | 'DEPOSITING'
  | 'RETURNING_HOME';

interface ActiveChef {
  mesh: ChefMesh;
  state: ChefState;
  currentOrder: CustomerOrder | null;
  recipe: Recipe | null;
  timer: number;
  targetPos: Point2D;
  waypoints: Point2D[];
  waypointIdx: number;
  speed: number;
  homePos: Point2D;
  cookingStationName?: string;
}

// Station locations in the kitchen
const KITCHEN_STATIONS = {
  PREP: { x: 11.5, z: -6.6 },
  STOVE: { x: 6.5, z: -11.0 },
  OVEN: { x: 10.5, z: -11.0 },
  FRYER: { x: 13.2, z: -11.0 },
  PICKUP_PASS: { x: 11.2, z: 0.4 },
  AISLE_MID: { x: 10.0, z: -5.0 },
  AISLE_WEST: { x: 7.5, z: -9.0 },
  AISLE_EAST: { x: 14.0, z: -9.0 }
};

export class ChefManager {
  private chefs: ActiveChef[] = [];

  constructor(
    private scene: THREE.Scene,
    private pickupCounter: PickupCounter,
    private onToast: (message: string, icon?: string) => void
  ) {
    this.initChefs();
  }

  private initChefs() {
    const chefConfigs: ChefConfig[] = [
      {
        id: 'chef-1',
        name: 'Chef Marco',
        title: 'Executive Chef',
        neckerchiefColor: 0xf27d6d, // Coral
        pantsColor: 0x3d3f44,
        skinTone: 0xf5cfb3,
        hairColor: 0x221815,
        homePos: { x: 8.5, z: -8.0 }
      },
      {
        id: 'chef-2',
        name: 'Chef Antoine',
        title: 'Sous Chef',
        neckerchiefColor: 0x76c29e, // Mint Green
        pantsColor: 0x484b52,
        skinTone: 0xe8b896,
        hairColor: 0x5c3c26,
        homePos: { x: 14.0, z: -8.0 }
      }
    ];

    for (const cfg of chefConfigs) {
      const mesh = new ChefMesh(cfg);
      this.scene.add(mesh.group);

      this.chefs.push({
        mesh,
        state: 'IDLE',
        currentOrder: null,
        recipe: null,
        timer: 0,
        targetPos: { ...cfg.homePos },
        waypoints: [],
        waypointIdx: 0,
        speed: 3.2,
        homePos: { ...cfg.homePos }
      });
    }
  }

  public update(delta: number, activeOrders: CustomerOrder[]) {
    // 1. Dispatch new orders to idle chefs
    this.dispatchOrders(activeOrders);

    // 2. Update each chef state machine
    for (const chef of this.chefs) {
      this.updateChef(chef, delta, activeOrders);
    }
  }

  private dispatchOrders(activeOrders: CustomerOrder[]) {
    // Get orders in PREPARING status that are not assigned to any chef yet
    const pendingOrders = activeOrders.filter((ord) => {
      if (ord.status !== 'PREPARING') return false;
      const alreadyClaimed = this.chefs.some((c) => c.currentOrder?.id === ord.id);
      return !alreadyClaimed;
    });

    if (pendingOrders.length === 0) return;

    for (const chef of this.chefs) {
      if (chef.state === 'IDLE' && pendingOrders.length > 0) {
        const order = pendingOrders.shift()!;
        this.assignOrderToChef(chef, order);
      }
    }
  }

  private assignOrderToChef(chef: ActiveChef, order: CustomerOrder) {
    const recipe = RECIPES[order.recipeId] || RECIPES.pizza;
    chef.currentOrder = order;
    chef.recipe = recipe;
    chef.state = 'WALKING_TO_PREP';
    chef.timer = 0;

    // Build path to prep table
    chef.waypoints = this.buildKitchenPath(
      { x: chef.mesh.group.position.x, z: chef.mesh.group.position.z },
      KITCHEN_STATIONS.PREP
    );
    chef.waypointIdx = 0;

    chef.mesh.setStatusBadge('Prepping...', order.dishIcon, '#d4af37');
    chef.mesh.setMovement(true);
    chef.mesh.setCookingAnimation(false);
    chef.mesh.setCarriedDish(null);
  }

  private updateChef(chef: ActiveChef, delta: number, activeOrders: CustomerOrder[]) {
    // If order was cancelled (e.g. customer left angry), chef cleans up
    if (chef.currentOrder && chef.state !== 'IDLE' && chef.state !== 'RETURNING_HOME') {
      const orderStillActive = activeOrders.some((o) => o.id === chef.currentOrder!.id && o.status !== 'CANCELLED');
      if (!orderStillActive) {
        this.onToast(`${chef.mesh.config.name} discarded cancelled order.`, '🗑️');
        chef.state = 'RETURNING_HOME';
        chef.currentOrder = null;
        chef.recipe = null;
        chef.mesh.setCarriedDish(null);
        chef.mesh.setStatusBadge(null);
        chef.waypoints = this.buildKitchenPath(
          { x: chef.mesh.group.position.x, z: chef.mesh.group.position.z },
          chef.homePos
        );
        chef.waypointIdx = 0;
        chef.mesh.setMovement(true);
        chef.mesh.setCookingAnimation(false);
      }
    }

    switch (chef.state) {
      case 'IDLE':
        chef.mesh.setMovement(false);
        chef.mesh.setCookingAnimation(false);
        chef.mesh.setStatusBadge(null);
        break;

      case 'WALKING_TO_PREP':
        if (this.followWaypoints(chef, delta)) {
          // Arrived at prep table
          chef.state = 'PREPPING';
          chef.timer = 2.8; // 2.8s prep time
          chef.mesh.setMovement(false);
          chef.mesh.setCookingAnimation(true);
          chef.mesh.group.rotation.y = Math.PI; // Face prep table (North)
          chef.mesh.setStatusBadge('Chopping & Mixing...', '🔪', '#e5c07b');
          sounds.playChop();
        }
        break;

      case 'PREPPING':
        chef.timer -= delta;
        if (chef.timer <= 0) {
          chef.mesh.setCookingAnimation(false);

          // Check if dish needs baking/grilling/frying
          const cookStation = this.determineCookingStation(chef.recipe!);
          if (cookStation) {
            chef.cookingStationName = cookStation.name;
            chef.state = 'WALKING_TO_COOK';
            chef.waypoints = this.buildKitchenPath(
              { x: chef.mesh.group.position.x, z: chef.mesh.group.position.z },
              cookStation.pos
            );
            chef.waypointIdx = 0;
            chef.mesh.setMovement(true);
            chef.mesh.setStatusBadge(`To ${cookStation.name}...`, '🚶', '#61afef');
          } else {
            // Sandwich requires no cooking! Ready immediately
            this.finishDish(chef);
          }
        }
        break;

      case 'WALKING_TO_COOK':
        if (this.followWaypoints(chef, delta)) {
          // Arrived at cooking station
          chef.state = 'COOKING';
          chef.timer = 4.5; // 4.5s cooking time
          chef.mesh.setMovement(false);
          chef.mesh.setCookingAnimation(true);
          chef.mesh.group.rotation.y = 0; // Face North towards wall station
          chef.mesh.setStatusBadge(`Cooking ${chef.currentOrder?.dishIcon}...`, '🔥', '#e06c75');
          sounds.playSizzle();
        }
        break;

      case 'COOKING':
        chef.timer -= delta;
        if (chef.timer <= 0) {
          chef.mesh.setCookingAnimation(false);
          this.finishDish(chef);
        } else {
          // Update countdown badge
          chef.mesh.setStatusBadge(`Baking ${chef.currentOrder?.dishIcon} ${Math.ceil(chef.timer)}s`, '🔥', '#e06c75');
        }
        break;

      case 'WALKING_TO_PICKUP':
        if (this.followWaypoints(chef, delta)) {
          // Arrived at pickup counter pass
          chef.state = 'DEPOSITING';
          chef.timer = 0.8;
          chef.mesh.setMovement(false);
          chef.mesh.group.rotation.y = Math.PI; // Face South towards dining hall counter
          chef.mesh.setStatusBadge('Plating...', '🍽️', '#98c379');
        }
        break;

      case 'DEPOSITING':
        chef.timer -= delta;
        if (chef.timer <= 0) {
          // Place dish onto pickup counter!
          if (chef.currentOrder) {
            const readyDish: ReadyDish = {
              id: `ready-${chef.currentOrder.id}`,
              orderId: chef.currentOrder.id,
              dishId: chef.currentOrder.dishId,
              dishName: chef.currentOrder.dishName,
              dishIcon: chef.currentOrder.dishIcon,
              targetLocationName: chef.currentOrder.targetLocationName,
              targetTableId: chef.currentOrder.tableId,
              isTakeaway: chef.currentOrder.type === 'takeaway'
            };

            this.pickupCounter.addReadyDish(readyDish);
            chef.currentOrder.status = 'READY_TO_SERVE';

            sounds.playBell();
            this.onToast(
              `✨ ${chef.mesh.config.name} plated hot ${readyDish.dishName} for ${readyDish.targetLocationName} at Pickup Counter!`,
              readyDish.dishIcon
            );
          }

          // Clear chef hands & head back home
          chef.mesh.setCarriedDish(null);
          chef.currentOrder = null;
          chef.recipe = null;

          chef.state = 'RETURNING_HOME';
          chef.waypoints = this.buildKitchenPath(
            { x: chef.mesh.group.position.x, z: chef.mesh.group.position.z },
            chef.homePos
          );
          chef.waypointIdx = 0;
          chef.mesh.setMovement(true);
          chef.mesh.setStatusBadge(null);
        }
        break;

      case 'RETURNING_HOME':
        if (this.followWaypoints(chef, delta)) {
          // Arrived home, ready for next order!
          chef.state = 'IDLE';
          chef.mesh.setMovement(false);
          chef.mesh.group.rotation.y = Math.PI; // Face into kitchen/dining
          chef.mesh.setStatusBadge(null);
        }
        break;
    }

    chef.mesh.update(delta);
  }

  private finishDish(chef: ActiveChef) {
    if (!chef.currentOrder) return;

    chef.state = 'WALKING_TO_PICKUP';
    chef.mesh.setCarriedDish({
      name: chef.currentOrder.dishName,
      icon: chef.currentOrder.dishIcon
    });

    chef.waypoints = this.buildKitchenPath(
      { x: chef.mesh.group.position.x, z: chef.mesh.group.position.z },
      KITCHEN_STATIONS.PICKUP_PASS
    );
    chef.waypointIdx = 0;
    chef.mesh.setMovement(true);
    chef.mesh.setStatusBadge('Serving to Pass...', '🛎️', '#98c379');
  }

  private determineCookingStation(recipe: Recipe): { name: string; pos: Point2D } | null {
    if (recipe.category === 'pizza') {
      return { name: 'Pizza Oven', pos: KITCHEN_STATIONS.OVEN };
    }
    if (recipe.category === 'burger' || recipe.category === 'pasta') {
      return { name: 'Grill & Range', pos: KITCHEN_STATIONS.STOVE };
    }
    if (recipe.category === 'fried_chicken') {
      return { name: 'Deep Fryer', pos: KITCHEN_STATIONS.FRYER };
    }
    return null; // Club sandwich needs no heating
  }

  private followWaypoints(chef: ActiveChef, delta: number): boolean {
    if (chef.waypointIdx >= chef.waypoints.length) return true;

    const target = chef.waypoints[chef.waypointIdx];
    const currentX = chef.mesh.group.position.x;
    const currentZ = chef.mesh.group.position.z;

    const dx = target.x - currentX;
    const dz = target.z - currentZ;
    const dist = Math.hypot(dx, dz);

    if (dist < 0.15) {
      chef.waypointIdx++;
      if (chef.waypointIdx >= chef.waypoints.length) {
        return true;
      }
      return false;
    }

    // Move towards target
    const step = Math.min(dist, chef.speed * delta);
    chef.mesh.group.position.x += (dx / dist) * step;
    chef.mesh.group.position.z += (dz / dist) * step;

    // Rotate towards movement direction
    const targetAngle = Math.atan2(dx, dz);
    let diff = targetAngle - chef.mesh.group.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    chef.mesh.group.rotation.y += diff * Math.min(1, 10 * delta);

    return false;
  }

  private buildKitchenPath(start: Point2D, end: Point2D): Point2D[] {
    // If moving between North stations (Z < -9) and South stations (Z > -6), route through aisles
    // to avoid walking directly through the Prep Island at X=11.5, Z=-8.0
    const points: Point2D[] = [];

    const isIslandInBetween =
      (start.z < -8.5 && end.z > -7.0) ||
      (start.z > -7.0 && end.z < -8.5);

    if (isIslandInBetween) {
      // Pick either west aisle (X=8.0) or east aisle (X=14.0) depending on closest
      const useWest = (start.x + end.x) / 2 < 11.0;
      const aisleX = useWest ? 7.5 : 14.5;

      points.push({ x: aisleX, z: start.z });
      points.push({ x: aisleX, z: end.z });
      points.push(end);
    } else {
      points.push(end);
    }

    return points;
  }
}

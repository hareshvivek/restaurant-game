import * as THREE from 'three';
import { CustomerOrder, CustomerState, DiningTableSpot } from './types';
import { CustomerMesh } from './customerMesh';
import { DINING_TABLE_CONFIGS, TAKEAWAY_COUNTER_CONFIG, getExitPath, Point2D, RESTAURANT_ENTRANCE } from './waypoints';
import { TableVisualsManager } from './tableVisuals';
import { RECIPES } from '../cooking/recipes';
import { CarriedItem } from '../cooking/types';
import { sounds } from '../audio';

export interface CustomerManagerCallbacks {
  onOrdersChange: (orders: CustomerOrder[]) => void;
  onRevenueEarned: (amount: number, tip: number) => void;
  onToast: (message: string, icon?: string) => void;
}

interface ActiveCustomer {
  id: string;
  mesh: CustomerMesh;
  state: CustomerState;
  order: CustomerOrder;
  currentPath: Point2D[];
  pathIndex: number;
  assignedTableId?: string;
  isTakeaway: boolean;
  timer: number; // general state timer
  speed: number;
}

export class CustomerManager {
  private activeCustomers: Map<string, ActiveCustomer> = new Map();
  private tables: Map<string, DiningTableSpot> = new Map();
  private tableVisuals: TableVisualsManager;
  private spawnCooldown: number = 2.0; // Initial customer arrives quickly!
  private customerCounter: number = 1;
  private takeawayOccupied: boolean = false;

  constructor(
    private scene: THREE.Scene,
    private callbacks: CustomerManagerCallbacks
  ) {
    this.tableVisuals = new TableVisualsManager(this.scene);

    // Initialize Dining Tables
    DINING_TABLE_CONFIGS.forEach((cfg) => {
      this.tables.set(cfg.id, {
        id: cfg.id,
        interactionId: cfg.interactionId,
        name: cfg.name,
        tableCenter: cfg.tableCenter,
        seatPosition: cfg.seatPosition,
        seatRotationY: cfg.seatRotationY,
        isBooth: cfg.isBooth,
        cleanState: 'CLEAN',
        currentCustomerId: null
      });
    });
  }

  public update(delta: number) {
    // 1. Spawning
    this.spawnCooldown -= delta;
    if (this.spawnCooldown <= 0) {
      this.spawnCooldown = 12.0 + Math.random() * 5.0; // Spawn every 12-17 seconds
      this.trySpawnCustomer();
    }

    // 2. Update active customers
    const toRemove: string[] = [];

    this.activeCustomers.forEach((cust) => {
      this.updateCustomer(cust, delta, toRemove);
    });

    toRemove.forEach((id) => {
      const cust = this.activeCustomers.get(id);
      if (cust) {
        this.scene.remove(cust.mesh.group);
        cust.mesh.dispose();
        this.activeCustomers.delete(id);
        if (cust.isTakeaway) {
          this.takeawayOccupied = false;
        }
      }
    });

    // Notify HUD of active order states
    this.notifyOrders();
  }

  private trySpawnCustomer() {
    // Cap total concurrent active customers at 4
    if (this.activeCustomers.size >= 4) return;

    // Check available clean tables
    const availableTables = Array.from(this.tables.values()).filter(
      (t) => t.cleanState === 'CLEAN' && !t.currentCustomerId
    );

    const canDoTakeaway = !this.takeawayOccupied;

    if (availableTables.length === 0 && !canDoTakeaway) {
      return; // No space for new customers
    }

    // Decide Dine-in vs Takeaway
    let isTakeaway = false;
    if (canDoTakeaway && (availableTables.length === 0 || Math.random() < 0.3)) {
      isTakeaway = true;
    }

    const customerId = `cust-${this.customerCounter++}`;
    const mesh = new CustomerMesh(customerId);
    mesh.group.position.set(RESTAURANT_ENTRANCE.x, 0, RESTAURANT_ENTRANCE.z);
    this.scene.add(mesh.group);

    // Pick random dish from available recipes
    const recipeKeys = Object.keys(RECIPES);
    const chosenRecipeKey = recipeKeys[Math.floor(Math.random() * recipeKeys.length)];
    const recipe = RECIPES[chosenRecipeKey];

    // Dish prices
    const prices: Record<string, number> = {
      dish_pizza: 28,
      dish_burger: 22,
      dish_pasta: 24,
      dish_sandwich: 18,
      dish_chicken: 20
    };
    const price = prices[recipe.finalDish.id] || 20;

    let assignedTable: DiningTableSpot | undefined;
    let path: Point2D[];

    if (!isTakeaway) {
      assignedTable = availableTables[Math.floor(Math.random() * availableTables.length)];
      assignedTable.currentCustomerId = customerId;
      assignedTable.cleanState = 'OCCUPIED';

      const tableCfg = DINING_TABLE_CONFIGS.find((c) => c.id === assignedTable!.id)!;
      path = [...tableCfg.pathWaypoints];
    } else {
      this.takeawayOccupied = true;
      path = [...TAKEAWAY_COUNTER_CONFIG.pathWaypoints];
    }

    const maxPatienceSec = 95 + Math.random() * 25; // 95 - 120 seconds
    const order: CustomerOrder = {
      id: `ord-${customerId}`,
      customerId,
      customerName: mesh.name,
      type: isTakeaway ? 'takeaway' : 'dine_in',
      tableId: assignedTable ? assignedTable.id : undefined,
      targetLocationName: assignedTable ? assignedTable.name : 'Takeaway Counter',
      dishId: recipe.finalDish.id,
      dishName: recipe.name,
      dishIcon: recipe.icon,
      recipeId: recipe.id,
      price,
      tip: 0,
      status: isTakeaway ? 'PREPARING' : 'THINKING',
      patience: 100,
      maxPatience: maxPatienceSec,
      patienceRemainingSec: maxPatienceSec
    };

    const activeCust: ActiveCustomer = {
      id: customerId,
      mesh,
      state: isTakeaway ? 'WALKING_TO_COUNTER' : 'WALKING_TO_TABLE',
      order,
      currentPath: path,
      pathIndex: 0,
      assignedTableId: assignedTable?.id,
      isTakeaway,
      timer: 0,
      speed: 3.2
    };

    mesh.updateStateVisual(activeCust.state, order);
    this.activeCustomers.set(customerId, activeCust);

    if (isTakeaway) {
      this.callbacks.onToast(`Guest ${mesh.name} ordered ${recipe.name} for takeaway!`, '🥡');
      sounds.playOrderPlaced();
    }
  }

  private updateCustomer(cust: ActiveCustomer, delta: number, toRemove: string[]) {
    // 1. Waypoint movement for walking states
    const isWalking =
      cust.state === 'ENTERING' ||
      cust.state === 'WALKING_TO_TABLE' ||
      cust.state === 'WALKING_TO_COUNTER' ||
      cust.state === 'LEAVING_HAPPY' ||
      cust.state === 'LEAVING_ANGRY';

    if (isWalking && cust.currentPath.length > 0) {
      const targetPoint = cust.currentPath[cust.pathIndex];
      const currentPos = cust.mesh.group.position;
      const dx = targetPoint.x - currentPos.x;
      const dz = targetPoint.z - currentPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < 0.15) {
        cust.pathIndex++;
        if (cust.pathIndex >= cust.currentPath.length) {
          // Reached destination!
          this.handlePathArrival(cust, toRemove);
        }
      } else {
        // Move towards target
        const step = Math.min(dist, cust.speed * delta);
        currentPos.x += (dx / dist) * step;
        currentPos.z += (dz / dist) * step;

        // Face movement direction smoothly
        const targetAngle = Math.atan2(dx, dz);
        cust.mesh.group.rotation.y = targetAngle;
      }
    }

    cust.mesh.updateAnimation(isWalking, delta);

    // 2. Patience countdown (when waiting for food or order taking)
    if (cust.state === 'READY_TO_ORDER' || cust.state === 'WAITING_FOR_FOOD') {
      cust.order.patienceRemainingSec -= delta;
      cust.order.patience = Math.max(0, (cust.order.patienceRemainingSec / cust.order.maxPatience) * 100);

      if (cust.order.patienceRemainingSec <= 0) {
        // Customer patience ran out!
        this.handlePatienceExpired(cust);
      }
    }

    // 3. State timers
    if (cust.state === 'SEATED_THINKING') {
      cust.timer += delta;
      if (cust.timer >= 3.5) {
        // Ready to order!
        cust.state = 'READY_TO_ORDER';
        cust.order.status = 'WAITING_TO_BE_TAKEN';
        sounds.playOrderPlaced();
        this.callbacks.onToast(`${cust.mesh.name} at ${cust.order.targetLocationName} is ready to order!`, '🛎️');
      }
    } else if (cust.state === 'EATING') {
      cust.timer += delta;
      if (cust.timer >= 6.5) {
        // Finished eating, pays bill!
        this.handleCustomerPayAndLeave(cust);
      }
    }

    cust.mesh.updateStateVisual(cust.state, cust.order);
  }

  private handlePathArrival(cust: ActiveCustomer, toRemove: string[]) {
    if (cust.state === 'WALKING_TO_TABLE') {
      // Arrived at table chair
      const tableCfg = DINING_TABLE_CONFIGS.find((c) => c.id === cust.assignedTableId);
      if (tableCfg) {
        cust.mesh.group.position.set(tableCfg.seatPosition.x, 0, tableCfg.seatPosition.z);
        cust.mesh.setSeated(true, tableCfg.seatRotationY);
      }
      cust.state = 'SEATED_THINKING';
      cust.timer = 0;
    } else if (cust.state === 'WALKING_TO_COUNTER') {
      // Arrived at takeaway counter
      cust.mesh.group.position.set(
        TAKEAWAY_COUNTER_CONFIG.waitingPosition.x,
        0,
        TAKEAWAY_COUNTER_CONFIG.waitingPosition.z
      );
      cust.mesh.group.rotation.y = TAKEAWAY_COUNTER_CONFIG.waitingRotationY;
      cust.state = 'WAITING_FOR_FOOD';
    } else if (cust.state === 'LEAVING_HAPPY' || cust.state === 'LEAVING_ANGRY') {
      // Exited restaurant!
      toRemove.push(cust.id);
    }
  }

  private handlePatienceExpired(cust: ActiveCustomer) {
    cust.state = 'LEAVING_ANGRY';
    cust.order.status = 'CANCELLED';
    cust.mesh.setSeated(false);
    sounds.playCustomerAngry();

    this.callbacks.onToast(`${cust.mesh.name} waited too long and left angry!`, '😡');

    if (cust.assignedTableId) {
      const table = this.tables.get(cust.assignedTableId);
      if (table) {
        table.cleanState = 'CLEAN';
        table.currentCustomerId = null;
      }
      const tableCfg = DINING_TABLE_CONFIGS.find((c) => c.id === cust.assignedTableId)!;
      cust.currentPath = getExitPath(tableCfg.pathWaypoints);
    } else {
      cust.currentPath = getExitPath(TAKEAWAY_COUNTER_CONFIG.pathWaypoints);
    }
    cust.pathIndex = 0;
  }

  private handleCustomerPayAndLeave(cust: ActiveCustomer) {
    cust.state = 'PAYING';
    cust.mesh.setSeated(false);

    // Tip bonus based on remaining patience
    const tipPct = Math.round((cust.order.patience / 100) * 35); // up to 35% tip
    const tip = Math.max(3, Math.round((cust.order.price * tipPct) / 100));
    cust.order.tip = tip;
    cust.order.status = 'COMPLETED';

    const total = cust.order.price + tip;
    sounds.playCash();
    this.callbacks.onRevenueEarned(cust.order.price, tip);
    this.callbacks.onToast(
      `${cust.mesh.name} paid $${total} ($${cust.order.price} + $${tip} tip)! ⭐⭐⭐⭐⭐`,
      '💰'
    );

    // Update table visuals to dirty dishes + coins
    if (cust.assignedTableId) {
      const table = this.tables.get(cust.assignedTableId);
      if (table) {
        table.cleanState = 'DIRTY';
        table.currentCustomerId = null;
      }
      this.tableVisuals.showDirtyTable(cust.assignedTableId, tip);

      const tableCfg = DINING_TABLE_CONFIGS.find((c) => c.id === cust.assignedTableId)!;
      cust.currentPath = getExitPath(tableCfg.pathWaypoints);
    }

    cust.state = 'LEAVING_HAPPY';
    cust.pathIndex = 0;
  }

  // --- INTERACTION HOOKS ---

  // Check what action the player can perform at an interaction ID
  public getInteractionPrompt(interactionId: string, carriedItem: CarriedItem | null): string | null {
    // 1. Dining Tables
    for (const table of this.tables.values()) {
      if (table.interactionId === interactionId) {
        if (table.cleanState === 'DIRTY') {
          return `Clean ${table.name}`;
        }
        if (table.currentCustomerId) {
          const cust = this.activeCustomers.get(table.currentCustomerId);
          if (cust) {
            if (cust.state === 'READY_TO_ORDER') {
              return `Take Order from ${table.name}`;
            }
            if (cust.state === 'WAITING_FOR_FOOD') {
              if (carriedItem && carriedItem.id === cust.order.dishId) {
                return `Serve ${cust.order.dishName} to ${table.name}`;
              }
              return `Waiting for ${cust.order.dishName}`;
            }
            if (cust.state === 'SEATED_THINKING') {
              return `Customer is reading menu...`;
            }
            if (cust.state === 'EATING') {
              return `Customer is enjoying meal 😋`;
            }
          }
        }
        return `Table is clean & ready`;
      }
    }

    // 2. Takeaway Counter (POS terminal interaction: 'interact-pos')
    if (interactionId === 'interact-pos') {
      const takeawayCust = Array.from(this.activeCustomers.values()).find(
        (c) => c.isTakeaway && (c.state === 'WAITING_FOR_FOOD' || c.state === 'WALKING_TO_COUNTER')
      );
      if (takeawayCust) {
        if (carriedItem && carriedItem.id === takeawayCust.order.dishId) {
          return `Package & Hand ${takeawayCust.order.dishName} to Guest`;
        }
        return `Takeaway waiting for ${takeawayCust.order.dishName}`;
      }
      return 'POS Register (Service Counter)';
    }

    return null;
  }

  // Handle player pressing E at an interaction ID
  public handleInteraction(
    interactionId: string,
    carriedItem: CarriedItem | null,
    onConsumeCarriedItem: () => void
  ): boolean {
    // 1. Dining Tables
    for (const table of this.tables.values()) {
      if (table.interactionId === interactionId) {
        // A) Cleaning dirty table
        if (table.cleanState === 'DIRTY') {
          table.cleanState = 'CLEAN';
          this.tableVisuals.clearTableVisuals(table.id);
          sounds.playCleanTable();
          this.callbacks.onToast(`${table.name} wiped sparkling clean! ✨`, '🧹');
          return true;
        }

        // B) Taking order from customer
        if (table.currentCustomerId) {
          const cust = this.activeCustomers.get(table.currentCustomerId);
          if (cust && cust.state === 'READY_TO_ORDER') {
            cust.state = 'WAITING_FOR_FOOD';
            cust.order.status = 'PREPARING';
            sounds.playOrderPlaced();
            this.callbacks.onToast(`Order taken: ${cust.order.dishName} for ${table.name}!`, '📝');
            return true;
          }

          // C) Serving food to customer
          if (cust && cust.state === 'WAITING_FOR_FOOD') {
            if (carriedItem && carriedItem.id === cust.order.dishId) {
              onConsumeCarriedItem();
              cust.state = 'EATING';
              cust.order.status = 'EATING';
              cust.timer = 0;
              this.tableVisuals.showServedFood(table.id, cust.order.dishId);
              sounds.playServeFood();
              this.callbacks.onToast(`Served hot ${cust.order.dishName} to ${table.name}!`, '🍽️');
              return true;
            } else if (carriedItem) {
              this.callbacks.onToast(
                `${cust.mesh.name} ordered ${cust.order.dishName}, not ${carriedItem.name}!`,
                '⚠️'
              );
              return true;
            }
          }
        }
      }
    }

    // 2. Takeaway Counter
    if (interactionId === 'interact-pos') {
      const takeawayCust = Array.from(this.activeCustomers.values()).find(
        (c) => c.isTakeaway && c.state === 'WAITING_FOR_FOOD'
      );

      if (takeawayCust) {
        if (carriedItem && carriedItem.id === takeawayCust.order.dishId) {
          onConsumeCarriedItem();
          this.tableVisuals.showTakeawayBag(true);

          // Customer collects bag and pays
          const tipPct = Math.round((takeawayCust.order.patience / 100) * 25);
          const tip = Math.max(2, Math.round((takeawayCust.order.price * tipPct) / 100));
          takeawayCust.order.tip = tip;
          takeawayCust.order.status = 'COMPLETED';

          const total = takeawayCust.order.price + tip;
          sounds.playCash();
          this.callbacks.onRevenueEarned(takeawayCust.order.price, tip);
          this.callbacks.onToast(
            `Packaged & handed ${takeawayCust.order.dishName} to ${takeawayCust.mesh.name}! Paid $${total}!`,
            '🥡'
          );

          // Clear bag from counter after 1.5s
          setTimeout(() => {
            this.tableVisuals.showTakeawayBag(false);
          }, 1500);

          takeawayCust.state = 'LEAVING_HAPPY';
          takeawayCust.currentPath = getExitPath(TAKEAWAY_COUNTER_CONFIG.pathWaypoints);
          takeawayCust.pathIndex = 0;
          this.takeawayOccupied = false;
          return true;
        } else if (carriedItem) {
          this.callbacks.onToast(
            `Guest ordered ${takeawayCust.order.dishName}, not ${carriedItem.name}!`,
            '⚠️'
          );
          return true;
        }
      }
    }

    return false;
  }

  public getActiveOrders(): CustomerOrder[] {
    const activeOrders: CustomerOrder[] = [];
    this.activeCustomers.forEach((cust) => {
      if (
        cust.state === 'WALKING_TO_TABLE' ||
        cust.state === 'WALKING_TO_COUNTER' ||
        cust.state === 'READY_TO_ORDER' ||
        cust.state === 'WAITING_FOR_FOOD' ||
        cust.state === 'SEATED_THINKING' ||
        cust.state === 'EATING'
      ) {
        activeOrders.push(cust.order);
      }
    });
    return activeOrders;
  }

  private notifyOrders() {
    this.callbacks.onOrdersChange(this.getActiveOrders());
  }
}

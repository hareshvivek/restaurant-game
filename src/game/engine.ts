import * as THREE from 'three';
import { CAMERA_CONFIG, PALETTE } from './config';
import { PhysicsSystem } from './physics';
import { InteractionSystem, InteractiveObject } from './interaction';
import { RestaurantWorld } from './world';
import { Player } from './player';
import { sounds } from './audio';
import { CookingManager } from './cooking/cookingManager';
import { CarriedItem, StationType } from './cooking/types';
import { CustomerManager } from './customers/customerManager';
import { CustomerOrder } from './customers/types';
import { PickupCounter } from './chefs/pickupCounter';
import { ChefManager } from './chefs/chefManager';

export interface GameEngineCallbacks {
  onZoneChange: (zoneName: string) => void;
  onActiveTargetChange: (target: InteractiveObject | null) => void;
  onTriggerInteraction: (target: InteractiveObject) => void;
  onInventoryChange: (item: CarriedItem | null) => void;
  onOpenStorageModal: (stationType: StationType, onSelectItem: (id: string) => void) => void;
  onShowCookingToast: (message: string, icon?: string) => void;
  onOrdersChange: (orders: CustomerOrder[]) => void;
  onRevenueEarned: (amount: number, tip: number) => void;
}

export class GameEngine {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private world: RestaurantWorld;
  private player: Player;
  private physics: PhysicsSystem;
  private interactions: InteractionSystem;
  public cookingManager: CookingManager;
  public customerManager: CustomerManager;
  public pickupCounter: PickupCounter;
  public chefManager: ChefManager;

  private isRunning: boolean = false;
  private lastTime: number = 0;
  private animationFrameId: number | null = null;
  private promptRefreshTimer: number = 0;

  // Input state
  private keys: Record<string, boolean> = {};
  private inputDir = { x: 0, z: 0 };

  // Camera settings
  private frustumSize = CAMERA_CONFIG.frustumSize;
  private cameraOffset = new THREE.Vector3(26, 32, 26);
  private cameraLookTarget = new THREE.Vector3();

  // Resize observer
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private container: HTMLElement,
    private callbacks: GameEngineCallbacks
  ) {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x23252b);

    // 2. Camera: Orthographic Isometric
    const aspect = container.clientWidth / container.clientHeight;
    const halfH = this.frustumSize / 2;
    const halfW = halfH * aspect;
    this.camera = new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, 0.1, 500);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    // 4. Subsystems
    this.physics = new PhysicsSystem();
    this.interactions = new InteractionSystem();

    // 5. Lighting
    this.setupLighting();

    // 6. World & Player (Initialized before cookingManager so player exists)
    this.world = new RestaurantWorld(this.scene, this.physics, this.interactions);
    this.player = new Player(-3, 6);
    this.scene.add(this.player.mesh);

    // 7. Cooking Manager
    this.cookingManager = new CookingManager(this.scene, {
      onInventoryChange: (item) => {
        if (this.player) {
          this.player.setCarriedItemVisual(item);
        }
        this.callbacks.onInventoryChange(item);
      },
      onOpenStorageModal: callbacks.onOpenStorageModal,
      onShowCookingToast: callbacks.onShowCookingToast
    });

    // 8. Customer & Service Manager
    this.customerManager = new CustomerManager(this.scene, {
      onOrdersChange: callbacks.onOrdersChange,
      onRevenueEarned: callbacks.onRevenueEarned,
      onToast: callbacks.onShowCookingToast
    });

    // 9. Food Pickup Counter & Autonomous Kitchen Chefs
    this.pickupCounter = new PickupCounter(this.scene, this.interactions, callbacks.onShowCookingToast);
    this.chefManager = new ChefManager(this.scene, this.pickupCounter, callbacks.onShowCookingToast);

    this.interactions.setListeners(
      (target) => {
        if (!target) {
          callbacks.onActiveTargetChange(null);
          return;
        }

        if (target.id === 'interact-pickup-counter') {
          const pickupPrompt = this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());
          callbacks.onActiveTargetChange({
            ...target,
            actionLabel: pickupPrompt || target.actionLabel
          });
        } else if (target.id.startsWith('station-')) {
          const dynamicLabel = this.cookingManager.getInteractionPrompt(target.id);
          callbacks.onActiveTargetChange({
            ...target,
            actionLabel: dynamicLabel || target.actionLabel
          });
        } else if (
          target.id.startsWith('interact-dining-table-') ||
          target.id.startsWith('interact-booth-') ||
          target.id === 'interact-pos'
        ) {
          const custPrompt = this.customerManager.getInteractionPrompt(target.id, this.cookingManager.getCarriedItem());
          callbacks.onActiveTargetChange({
            ...target,
            actionLabel: custPrompt || target.actionLabel
          });
        } else {
          callbacks.onActiveTargetChange(target);
        }
      },
      (target) => {
        // If target is pickup counter, collect prepared dish
        if (target.id === 'interact-pickup-counter') {
          const handled = this.pickupCounter.handleInteraction(
            this.cookingManager.getCarriedItem(),
            (dish) => {
              this.cookingManager.inventory.setCarriedItem({
                id: dish.dishId,
                name: dish.dishName,
                icon: dish.dishIcon,
                type: 'dish',
                orderId: dish.orderId,
                targetLocationName: dish.targetLocationName,
                targetTableId: dish.targetTableId,
                isTakeaway: dish.isTakeaway
              });
            }
          );
          if (handled) {
            const prompt = this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());
            callbacks.onActiveTargetChange({
              ...target,
              actionLabel: prompt || target.actionLabel
            });
            return;
          }
        }

        // If target is a kitchen station, let CookingManager handle it
        if (target.id.startsWith('station-')) {
          const handled = this.cookingManager.handleInteraction(target.id);
          if (handled) {
            const dynamicLabel = this.cookingManager.getInteractionPrompt(target.id);
            callbacks.onActiveTargetChange({
              ...target,
              actionLabel: dynamicLabel || target.actionLabel
            });
            return;
          }
        }

        // If target is a dining table or takeaway counter, let CustomerManager handle it
        if (
          target.id.startsWith('interact-dining-table-') ||
          target.id.startsWith('interact-booth-') ||
          target.id === 'interact-pos'
        ) {
          const custHandled = this.customerManager.handleInteraction(
            target.id,
            this.cookingManager.getCarriedItem(),
            () => this.cookingManager.clearCarriedItem()
          );
          if (custHandled) {
            const custPrompt = this.customerManager.getInteractionPrompt(
              target.id,
              this.cookingManager.getCarriedItem()
            );
            callbacks.onActiveTargetChange({
              ...target,
              actionLabel: custPrompt || target.actionLabel
            });
            return;
          }
        }

        // Standard inspection
        if (target.id === 'interact-bell') {
          sounds.playBell();
        } else {
          sounds.playInteract();
        }
        callbacks.onTriggerInteraction(target);
      }
    );

    // Initial camera placement
    this.cameraLookTarget.set(this.player.position.x, 1, this.player.position.z);
    this.camera.position.copy(this.cameraLookTarget).add(this.cameraOffset);
    this.camera.lookAt(this.cameraLookTarget);

    // 8. Event Listeners
    this.bindEvents();

    // 9. Handle container resize
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(container);
  }

  private setupLighting() {
    // Warm Sunlit Ambient Light
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.15);
    this.scene.add(ambientLight);

    // Key Directional Light (Warm Golden Sunlight from upper-right)
    const dirLight = new THREE.DirectionalLight(0xffeed6, 1.75);
    dirLight.position.set(28, 42, 22);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 120;
    dirLight.shadow.camera.left = -26;
    dirLight.shadow.camera.right = 26;
    dirLight.shadow.camera.top = 26;
    dirLight.shadow.camera.bottom = -26;
    dirLight.shadow.bias = -0.0005;
    this.scene.add(dirLight);

    // Soft Cream Fill Light
    const fillLight = new THREE.DirectionalLight(0xf8ebd5, 0.6);
    fillLight.position.set(-20, 20, -20);
    this.scene.add(fillLight);

    // Atmosphere warm cosy point lights
    const diningPoint = new THREE.PointLight(PALETTE.warmLight, 1.1, 18, 1.4);
    diningPoint.position.set(-5, 3.5, 4);
    this.scene.add(diningPoint);

    const kitchenPoint = new THREE.PointLight(0xfffaee, 1.3, 20, 1.4);
    kitchenPoint.position.set(10, 3.6, -7);
    this.scene.add(kitchenPoint);

    const counterPoint = new THREE.PointLight(PALETTE.warmLight, 1.1, 14, 1.4);
    counterPoint.position.set(10, 3.2, 2);
    this.scene.add(counterPoint);

    const restroomPoint = new THREE.PointLight(0xfff4e6, 0.95, 12, 1.4);
    restroomPoint.position.set(-11.5, 3.0, -8.5);
    this.scene.add(restroomPoint);
  }

  private bindEvents() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  private unbindEvents() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
      return;
    }

    if (e.code === 'KeyE') {
      this.interactions.interact();
      return;
    }

    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      e.preventDefault();
      this.keys[e.code] = true;
      this.updateInputDir();
    }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      e.preventDefault();
      this.keys[e.code] = false;
      this.updateInputDir();
    }
  };

  private updateInputDir() {
    let screenX = 0;
    let screenY = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) screenY -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) screenY += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) screenX -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) screenX += 1;

    if (screenX === 0 && screenY === 0) {
      this.inputDir.x = 0;
      this.inputDir.z = 0;
      return;
    }

    const len = Math.hypot(screenX, screenY);
    const nx = screenX / len;
    const ny = screenY / len;

    const cos45 = Math.SQRT1_2;
    const sin45 = Math.SQRT1_2;

    this.inputDir.x = (nx * cos45 + ny * sin45);
    this.inputDir.z = (-nx * sin45 + ny * cos45);
  }

  private handleResize() {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    const aspect = width / height;
    const halfH = this.frustumSize / 2;
    const halfW = halfH * aspect;

    this.camera.left = -halfW;
    this.camera.right = halfW;
    this.camera.top = halfH;
    this.camera.bottom = -halfH;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.loop();
  }

  public stop() {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public triggerInteract() {
    this.interactions.interact();
  }

  private loop = () => {
    if (!this.isRunning) return;

    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // 1. Update Cooking Stations (timers, cooking, burning)
    this.cookingManager.update(delta);

    // 2. Update Customers (movement, orders, patience, dining, service)
    this.customerManager.update(delta);

    // 3. Update Autonomous Chefs (claim orders, prep, cook, deliver to pickup pass)
    this.chefManager.update(delta, this.customerManager.getActiveOrders());

    // 4. Update Player & Check Collisions
    const playerState = this.player.update(this.inputDir, delta, this.physics);
    this.callbacks.onZoneChange(playerState.zone);

    // 5. Update Proximity Interactions
    this.interactions.update(playerState.x, playerState.z);

    // 6. Periodically refresh prompt if near pickup counter, cooking station, dining table, or POS
    this.promptRefreshTimer += delta;
    if (this.promptRefreshTimer > 0.2) {
      this.promptRefreshTimer = 0;
      const target = this.interactions.getActiveTarget();
      if (target) {
        if (target.id === 'interact-pickup-counter') {
          const pickupPrompt = this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());
          if (pickupPrompt) {
            this.callbacks.onActiveTargetChange({
              ...target,
              actionLabel: pickupPrompt
            });
          }
        } else if (target.id.startsWith('station-')) {
          const dynamicLabel = this.cookingManager.getInteractionPrompt(target.id);
          if (dynamicLabel) {
            this.callbacks.onActiveTargetChange({
              ...target,
              actionLabel: dynamicLabel
            });
          }
        } else if (
          target.id.startsWith('interact-dining-table-') ||
          target.id.startsWith('interact-booth-') ||
          target.id === 'interact-pos'
        ) {
          const custPrompt = this.customerManager.getInteractionPrompt(
            target.id,
            this.cookingManager.getCarriedItem()
          );
          if (custPrompt) {
            this.callbacks.onActiveTargetChange({
              ...target,
              actionLabel: custPrompt
            });
          }
        }
      }
    }

    // 5. Update Visuals & Beacons
    this.world.updateAnimation(now * 0.001);

    // 6. Smooth Camera Following Player
    const targetX = this.player.position.x;
    const targetZ = this.player.position.z;

    this.cameraLookTarget.x += (targetX - this.cameraLookTarget.x) * CAMERA_CONFIG.lerpSpeed;
    this.cameraLookTarget.z += (targetZ - this.cameraLookTarget.z) * CAMERA_CONFIG.lerpSpeed;

    this.camera.position.set(
      this.cameraLookTarget.x + this.cameraOffset.x,
      this.cameraLookTarget.y + this.cameraOffset.y,
      this.cameraLookTarget.z + this.cameraOffset.z
    );
    this.camera.lookAt(this.cameraLookTarget);

    // 7. Render Scene
    this.renderer.render(this.scene, this.camera);

    this.animationFrameId = requestAnimationFrame(this.loop);
  };

  public destroy() {
    this.stop();
    this.unbindEvents();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}

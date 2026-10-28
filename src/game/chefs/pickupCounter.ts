import * as THREE from 'three';
import { PALETTE } from '../config';
import { InteractionSystem } from '../interaction';
import { CarriedItem } from '../cooking/types';
import { sounds } from '../audio';

export interface ReadyDish {
  id: string;
  orderId: string;
  dishId: string;
  dishName: string;
  dishIcon: string;
  targetLocationName: string;
  targetTableId?: string;
  isTakeaway: boolean;
}

export class PickupCounter {
  public group: THREE.Group;
  private dishes: ReadyDish[] = [];
  private dishVisuals: THREE.Group[] = [];
  private heatLight!: THREE.PointLight;
  private counterPassPos = new THREE.Vector3(11.2, 1.05, 1.5);

  constructor(
    private scene: THREE.Scene,
    private interactions: InteractionSystem,
    private onToast: (message: string, icon?: string) => void
  ) {
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.buildCounterFixture();
    this.registerInteraction();
  }

  private buildCounterFixture() {
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.85,
      roughness: 0.25
    });
    const stainlessMat = new THREE.MeshStandardMaterial({
      color: PALETTE.stainless,
      metalness: 0.9,
      roughness: 0.2
    });

    // 1. Heated Stainless Serving Pass Base on top of counter
    const passBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 0.9), stainlessMat);
    passBase.position.set(this.counterPassPos.x, this.counterPassPos.y, this.counterPassPos.z);
    passBase.castShadow = true;
    passBase.receiveShadow = true;
    this.group.add(passBase);

    // 2. Brass Warming Lamp Overhead Arch
    const archGroup = new THREE.Group();
    archGroup.position.set(this.counterPassPos.x, this.counterPassPos.y, this.counterPassPos.z);

    // Left and right brass uprights
    const leftPole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8), brassMat);
    leftPole.position.set(-1.0, 0.35, -0.3);
    const rightPole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8), brassMat);
    rightPole.position.set(1.0, 0.35, -0.3);

    // Crossbar
    const crossBar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.1, 8), brassMat);
    crossBar.rotation.z = Math.PI / 2;
    crossBar.position.set(0, 0.7, -0.3);

    // Two Brass Cone Heat Lamps
    for (let i = 0; i < 2; i++) {
      const lampX = -0.5 + i * 1.0;
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.16, 12, 1, true), brassMat);
      shade.position.set(lampX, 0.6, -0.15);
      archGroup.add(shade);

      // Bulb glowing warm amber
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffaa33 })
      );
      bulb.position.set(lampX, 0.56, -0.15);
      archGroup.add(bulb);
    }

    archGroup.add(leftPole, rightPole, crossBar);
    this.group.add(archGroup);

    // Warm Heat Lamp Light
    this.heatLight = new THREE.PointLight(0xff9922, 1.2, 4.5, 1.8);
    this.heatLight.position.set(this.counterPassPos.x, this.counterPassPos.y + 0.55, this.counterPassPos.z);
    this.group.add(this.heatLight);

    // Small Elegant Brass Sign: "ORDER PICKUP"
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 256;
    signCanvas.height = 64;
    const sCtx = signCanvas.getContext('2d')!;
    sCtx.fillStyle = '#1e1c20';
    sCtx.strokeStyle = '#d4af37';
    sCtx.lineWidth = 3;
    sCtx.beginPath();
    sCtx.roundRect ? sCtx.roundRect(4, 4, 248, 56, 10) : sCtx.rect(4, 4, 248, 56);
    sCtx.fill();
    sCtx.stroke();

    sCtx.font = 'bold 20px serif';
    sCtx.fillStyle = '#fbf7ee';
    sCtx.textAlign = 'center';
    sCtx.fillText('🛎️ ORDER PICKUP', 128, 38);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: signTexture, transparent: true })
    );
    signSprite.scale.set(0.9, 0.25, 1);
    signSprite.position.set(this.counterPassPos.x, this.counterPassPos.y + 0.85, this.counterPassPos.z - 0.28);
    this.group.add(signSprite);
  }

  private registerInteraction() {
    this.interactions.register({
      id: 'interact-pickup-counter',
      name: 'Order Pickup Counter',
      zone: 'Takeaway & Order Counter',
      actionLabel: 'Check Pickup Pass',
      detailTitle: 'Chef Pass & Food Pickup Counter',
      detailDescription: 'Warming pass where chefs place freshly cooked meals for waitstaff to pick up and serve.',
      category: 'counter',
      x: this.counterPassPos.x,
      z: 2.2, // Dining room side for player approach
      interactionRadius: 2.0,
      icon: 'bell'
    });
  }

  public addReadyDish(dish: ReadyDish) {
    this.dishes.push(dish);
    this.updateDishVisuals();
  }

  public getReadyDishes(): ReadyDish[] {
    return this.dishes;
  }

  public removeDishByOrderId(orderId: string): ReadyDish | undefined {
    const idx = this.dishes.findIndex(d => d.orderId === orderId);
    if (idx !== -1) {
      const dish = this.dishes.splice(idx, 1)[0];
      this.updateDishVisuals();
      return dish;
    }
    return undefined;
  }

  private updateDishVisuals() {
    // Clear old visual platters
    for (const v of this.dishVisuals) {
      this.group.remove(v);
    }
    this.dishVisuals = [];

    // Render up to 3 visual ready dishes along the pass
    const count = Math.min(this.dishes.length, 3);
    const startX = this.counterPassPos.x - (count - 1) * 0.45;

    for (let i = 0; i < count; i++) {
      const dish = this.dishes[i];
      const dGroup = new THREE.Group();
      dGroup.position.set(startX + i * 0.9, this.counterPassPos.y + 0.03, this.counterPassPos.z);

      // Silver cloche / platter base
      const platterMat = new THREE.MeshStandardMaterial({
        color: PALETTE.brass,
        metalness: 0.85,
        roughness: 0.25
      });
      const platter = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.03, 16), platterMat);
      dGroup.add(platter);

      // Canvas sprite showing icon and destination tag
      const canvas = document.createElement('canvas');
      canvas.width = 160;
      canvas.height = 70;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = 'rgba(20, 22, 26, 0.92)';
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(4, 4, 152, 62, 12) : ctx.rect(4, 4, 152, 62);
      ctx.fill();
      ctx.stroke();

      ctx.font = '28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(dish.dishIcon, 80, 36);

      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#fdfaf2';
      const locText = dish.targetLocationName.length > 12 ? dish.targetLocationName.slice(0, 11) + '…' : dish.targetLocationName;
      ctx.fillText(locText, 80, 56);

      const tex = new THREE.CanvasTexture(canvas);
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
      );
      sprite.scale.set(0.68, 0.3, 1);
      sprite.position.set(0, 0.28, 0);
      dGroup.add(sprite);

      this.group.add(dGroup);
      this.dishVisuals.push(dGroup);
    }
  }

  public getInteractionPrompt(carriedItem: CarriedItem | null): string | null {
    if (this.dishes.length === 0) {
      if (carriedItem) {
        return `Hands full (${carriedItem.name})`;
      }
      return 'Pickup Counter (Waiting for chefs...)';
    }

    const nextDish = this.dishes[0];
    if (carriedItem) {
      return `Hands full! Deliver ${carriedItem.name} first`;
    }

    return `Pick up ${nextDish.dishName} (for ${nextDish.targetLocationName})`;
  }

  public handleInteraction(
    carriedItem: CarriedItem | null,
    onPickUpDish: (dish: ReadyDish) => void
  ): boolean {
    if (this.dishes.length === 0) {
      this.onToast('The pickup counter is empty. Chefs are preparing orders!', '👨‍🍳');
      return true;
    }

    if (carriedItem) {
      this.onToast(`Your hands are full carrying ${carriedItem.name}! Deliver it first.`, '⚠️');
      return true;
    }

    const nextDish = this.dishes.shift()!;
    this.updateDishVisuals();

    sounds.playBell();
    this.onToast(`Picked up ${nextDish.dishName}! Deliver to ${nextDish.targetLocationName}.`, '🍽️');
    onPickUpDish(nextDish);
    return true;
  }
}

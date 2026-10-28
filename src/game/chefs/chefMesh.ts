import * as THREE from 'three';
import { PALETTE } from '../config';

export interface ChefConfig {
  id: string;
  name: string;
  title: string;
  neckerchiefColor: number;
  pantsColor: number;
  skinTone: number;
  hairColor: number;
  homePos: { x: number; z: number };
}

export class ChefMesh {
  public group: THREE.Group;
  public config: ChefConfig;

  private bodyGroup: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private head: THREE.Group;
  private chefHat: THREE.Group;
  private shadowMesh: THREE.Mesh;

  // Carried Platter
  private platterGroup: THREE.Group;
  private platterCanvas: HTMLCanvasElement;
  private platterTexture: THREE.CanvasTexture;
  private platterSprite: THREE.Sprite;

  // Floating Overhead Status Bubble
  private statusSprite: THREE.Sprite;
  private statusCanvas: HTMLCanvasElement;
  private statusCtx: CanvasRenderingContext2D;
  private statusTexture: THREE.CanvasTexture;

  private isWalking: boolean = false;
  private isCooking: boolean = false;
  private walkTime: number = 0;
  private cookTime: number = 0;

  constructor(config: ChefConfig) {
    this.config = config;
    this.group = new THREE.Group();
    this.group.position.set(config.homePos.x, 0, config.homePos.z);

    // 1. Drop Shadow
    const shadowGeo = new THREE.CircleGeometry(0.46, 20);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x111115,
      transparent: true,
      opacity: 0.32,
      depthWrite: false
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.group.add(this.shadowMesh);

    // 2. Body Group
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // Common Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: config.skinTone, roughness: 0.7 });
    const hairMat = new THREE.MeshStandardMaterial({ color: config.hairColor, roughness: 0.8 });
    const whiteCoatMat = new THREE.MeshStandardMaterial({ color: 0xfdfdfc, roughness: 0.45 });
    const neckerchiefMat = new THREE.MeshStandardMaterial({ color: config.neckerchiefColor, roughness: 0.5 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: config.pantsColor, roughness: 0.75 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x18191c, roughness: 0.4 });
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.85,
      roughness: 0.25
    });

    // Legs
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.16, 0.55, 0);
    const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.52, 10), pantsMat);
    lLegMesh.position.y = -0.26;
    lLegMesh.castShadow = true;
    const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.24), shoeMat);
    lShoe.position.set(0, -0.5, 0.04);
    this.leftLeg.add(lLegMesh, lShoe);
    this.bodyGroup.add(this.leftLeg);

    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.16, 0.55, 0);
    const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.52, 10), pantsMat);
    rLegMesh.position.y = -0.26;
    rLegMesh.castShadow = true;
    const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.24), shoeMat);
    rShoe.position.set(0, -0.5, 0.04);
    this.rightLeg.add(rLegMesh, rShoe);
    this.bodyGroup.add(this.rightLeg);

    // Torso (Double-breasted Chef Jacket)
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.65, 0.36), whiteCoatMat);
    torso.position.y = 0.95;
    torso.castShadow = true;
    this.bodyGroup.add(torso);

    // Chef Jacket Black Buttons (2 columns of 3 buttons)
    const btnMat = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.3 });
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 2; c++) {
        const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.02, 8), btnMat);
        btn.rotation.x = Math.PI / 2;
        btn.position.set(-0.08 + c * 0.16, 1.12 - r * 0.14, 0.19);
        this.bodyGroup.add(btn);
      }
    }

    // Neckerchief Collar
    const neckerchief = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.04, 8, 16), neckerchiefMat);
    neckerchief.rotation.x = Math.PI / 2;
    neckerchief.position.set(0, 1.28, 0);
    this.bodyGroup.add(neckerchief);

    // Head Group
    this.head = new THREE.Group();
    this.head.position.set(0, 1.48, 0);

    const face = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 14), skinMat);
    face.scale.set(1.0, 1.05, 1.0);
    face.castShadow = true;
    this.head.add(face);

    // Hair
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.21, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), hairMat);
    hair.position.set(0, 0.04, -0.02);
    this.head.add(hair);

    // Nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), skinMat);
    nose.position.set(0, 0, 0.2);
    this.head.add(nose);

    // Mustache / Friendly feature
    const mustache = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.03), hairMat);
    mustache.position.set(0, -0.06, 0.19);
    this.head.add(mustache);

    // Chef Toque (Hat)
    this.chefHat = new THREE.Group();
    this.chefHat.position.set(0, 0.16, 0);

    const hatMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 });
    const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16), brassMat);
    hatBand.position.y = 0.05;
    this.chefHat.add(hatBand);

    const hatCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.19, 0.32, 16), hatMat);
    hatCrown.position.y = 0.24;
    hatCrown.castShadow = true;
    this.chefHat.add(hatCrown);

    const hatPuff = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 10), hatMat);
    hatPuff.position.y = 0.4;
    hatPuff.scale.set(1.05, 0.5, 1.05);
    this.chefHat.add(hatPuff);

    this.head.add(this.chefHat);
    this.bodyGroup.add(this.head);

    // Arms
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.35, 1.2, 0);
    const lUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.065, 0.32, 10), whiteCoatMat);
    lUpper.position.y = -0.16;
    lUpper.castShadow = true;
    const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 10), skinMat);
    lHand.position.y = -0.34;
    this.leftArm.add(lUpper, lHand);
    this.bodyGroup.add(this.leftArm);

    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.35, 1.2, 0);
    const rUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.065, 0.32, 10), whiteCoatMat);
    rUpper.position.y = -0.16;
    rUpper.castShadow = true;
    const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 10), skinMat);
    rHand.position.y = -0.34;
    this.rightArm.add(rUpper, rHand);
    this.bodyGroup.add(this.rightArm);

    // 3. Carried Platter (Forward plate when carrying food)
    this.platterGroup = new THREE.Group();
    this.platterGroup.position.set(0, 0.88, 0.45);
    this.platterGroup.visible = false;

    const plateMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.22, 0.03, 16),
      new THREE.MeshStandardMaterial({ color: PALETTE.brass, metalness: 0.85, roughness: 0.25 })
    );
    this.platterGroup.add(plateMesh);

    this.platterCanvas = document.createElement('canvas');
    this.platterCanvas.width = 128;
    this.platterCanvas.height = 64;
    this.platterTexture = new THREE.CanvasTexture(this.platterCanvas);
    this.platterTexture.colorSpace = THREE.SRGBColorSpace;

    this.platterSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: this.platterTexture, transparent: true, depthTest: false })
    );
    this.platterSprite.scale.set(0.65, 0.32, 1);
    this.platterSprite.position.set(0, 0.26, 0);
    this.platterGroup.add(this.platterSprite);
    this.bodyGroup.add(this.platterGroup);

    // 4. Floating Overhead Status Bubble (Mini, unobtrusive)
    this.statusCanvas = document.createElement('canvas');
    this.statusCanvas.width = 256;
    this.statusCanvas.height = 80;
    this.statusCtx = this.statusCanvas.getContext('2d')!;

    this.statusTexture = new THREE.CanvasTexture(this.statusCanvas);
    this.statusTexture.colorSpace = THREE.SRGBColorSpace;

    this.statusSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: this.statusTexture, transparent: true, depthTest: false })
    );
    this.statusSprite.scale.set(1.2, 0.38, 1);
    this.statusSprite.position.set(0, 2.35, 0);
    this.statusSprite.visible = false;
    this.group.add(this.statusSprite);
  }

  public setMovement(isMoving: boolean) {
    this.isWalking = isMoving;
  }

  public setCookingAnimation(cooking: boolean) {
    this.isCooking = cooking;
  }

  public setCarriedDish(dish: { name: string; icon: string } | null) {
    if (!dish) {
      this.platterGroup.visible = false;
      return;
    }
    this.platterGroup.visible = true;

    const ctx = this.platterCanvas.getContext('2d')!;
    ctx.clearRect(0, 0, 128, 64);

    ctx.fillStyle = 'rgba(20, 22, 26, 0.9)';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(4, 4, 120, 56, 12) : ctx.rect(4, 4, 120, 56);
    ctx.fill();
    ctx.stroke();

    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(dish.icon, 64, 40);

    this.platterTexture.needsUpdate = true;
  }

  public setStatusBadge(statusText: string | null, icon?: string, highlightColor: string = '#d4af37') {
    if (!statusText) {
      this.statusSprite.visible = false;
      return;
    }

    this.statusSprite.visible = true;
    const ctx = this.statusCtx;
    const w = this.statusCanvas.width;
    const h = this.statusCanvas.height;
    ctx.clearRect(0, 0, w, h);

    // Warm rounded glass pill
    ctx.save();
    ctx.fillStyle = 'rgba(22, 20, 24, 0.92)';
    ctx.strokeStyle = highlightColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(6, 6, w - 12, h - 12, 16) : ctx.rect(6, 6, w - 12, h - 12);
    ctx.fill();
    ctx.stroke();

    // Chef Name in small gold caps
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#d4af37';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.config.name.toUpperCase()}`, w / 2, 26);

    // Status action & icon
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#fdfaf2';
    const displayStr = icon ? `${icon} ${statusText}` : statusText;
    ctx.fillText(displayStr, w / 2, 54);
    ctx.restore();

    this.statusTexture.needsUpdate = true;
  }

  public update(delta: number) {
    if (this.isWalking) {
      this.walkTime += delta * 8;
      const swing = Math.sin(this.walkTime) * 0.5;
      this.leftLeg.rotation.x = swing;
      this.rightLeg.rotation.x = -swing;

      if (!this.platterGroup.visible) {
        this.leftArm.rotation.x = -swing * 0.7;
        this.rightArm.rotation.x = swing * 0.7;
      } else {
        // Holding platter steady forward
        this.leftArm.rotation.x = -0.5 + Math.sin(this.walkTime * 2) * 0.05;
        this.rightArm.rotation.x = -0.5 - Math.sin(this.walkTime * 2) * 0.05;
      }
      this.bodyGroup.position.y = Math.abs(Math.sin(this.walkTime * 2)) * 0.04;
    } else if (this.isCooking) {
      // Cooking animation: arms moving up and down chopping/stirring
      this.cookTime += delta * 7;
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.bodyGroup.position.y = 0;

      this.leftArm.rotation.x = -0.6 + Math.sin(this.cookTime) * 0.3;
      this.rightArm.rotation.x = -0.6 - Math.cos(this.cookTime) * 0.3;
      this.head.rotation.x = 0.15 + Math.sin(this.cookTime) * 0.05;
    } else {
      // Idle breathing
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = this.platterGroup.visible ? -0.5 : 0;
      this.rightArm.rotation.x = this.platterGroup.visible ? -0.5 : 0;
      this.head.rotation.x = 0;
      this.bodyGroup.position.y = 0;
    }
  }

  public dispose() {
    this.statusTexture.dispose();
    this.platterTexture.dispose();
  }
}

import * as THREE from 'three';
import { CustomerOrder, CustomerState } from './types';

// Cheerful, diverse customer color palettes (Coral, Mint, Soft Yellow, Camel, Navy, Sage)
const OUTFIT_PALETTES = [
  { coat: 0x3d5a80, pants: 0x243042, hair: 0x241712, hat: false }, // Soft Navy Suit
  { coat: 0x76c29e, pants: 0x354b40, hair: 0x6e4726, hat: true },  // Mint Coat & Beret
  { coat: 0xd99557, pants: 0x3d2816, hair: 0xa87948, hat: false }, // Warm Amber Jacket
  { coat: 0xf27d6d, pants: 0x2c252a, hair: 0x181719, hat: false }, // Cheerful Coral Jacket
  { coat: 0xe5c754, pants: 0x3b3318, hair: 0x3d2719, hat: true },  // Soft Honey Overcoat & Fedora
  { coat: 0x6096ba, pants: 0x21323f, hair: 0xc49a60, hat: false }  // Sky Blue Cardigan
];

const CUSTOMER_NAMES = [
  'Arthur Pendelton',
  'Eleanor Vance',
  'Marcus Sterling',
  'Sophia Laurent',
  'Julian Mercer',
  'Claire Dupont',
  'Oliver Finch',
  'Charlotte Beaumont',
  'Victor Hale',
  'Diana Ross'
];

export class CustomerMesh {
  public group: THREE.Group;
  public customerId: string;
  public name: string;
  public paletteIndex: number;

  private bodyGroup: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private head: THREE.Group;
  private shadowMesh: THREE.Mesh;

  // Overhead speech bubble sprite
  private badgeSprite: THREE.Sprite;
  private badgeCanvas: HTMLCanvasElement;
  private badgeContext: CanvasRenderingContext2D;
  private badgeTexture: THREE.CanvasTexture;
  private lastRenderKey: string = '';

  private isSeated: boolean = false;
  private walkTime: number = 0;

  constructor(customerId: string, paletteIdx?: number) {
    this.customerId = customerId;
    this.paletteIndex = paletteIdx ?? Math.floor(Math.random() * OUTFIT_PALETTES.length);
    const pal = OUTFIT_PALETTES[this.paletteIndex];
    this.name = CUSTOMER_NAMES[Math.floor(Math.random() * CUSTOMER_NAMES.length)];

    this.group = new THREE.Group();

    // 1. Shadow
    const shadowGeo = new THREE.CircleGeometry(0.45, 20);
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

    // 2. Body container
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // Legs
    const pantsMat = new THREE.MeshStandardMaterial({ color: pal.pants, roughness: 0.8 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.5 });

    // Left Leg Group (pivot at hip y=0.55)
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.15, 0.55, 0);
    const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.075, 0.5, 10), pantsMat);
    lLegMesh.position.y = -0.25;
    lLegMesh.castShadow = true;
    const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.09, 0.22), shoeMat);
    lShoe.position.set(0, -0.48, 0.03);
    this.leftLeg.add(lLegMesh, lShoe);
    this.bodyGroup.add(this.leftLeg);

    // Right Leg Group
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.15, 0.55, 0);
    const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.075, 0.5, 10), pantsMat);
    rLegMesh.position.y = -0.25;
    rLegMesh.castShadow = true;
    const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.09, 0.22), shoeMat);
    rShoe.position.set(0, -0.48, 0.03);
    this.rightLeg.add(rLegMesh, rShoe);
    this.bodyGroup.add(this.rightLeg);

    // Torso (Coat)
    const coatMat = new THREE.MeshStandardMaterial({
      color: pal.coat,
      roughness: 0.65,
      metalness: 0.08
    });
    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.58, 0.32), coatMat);
    torsoMesh.position.y = 0.82;
    torsoMesh.castShadow = true;
    this.bodyGroup.add(torsoMesh);

    // Scarf or Collar
    const collarMat = new THREE.MeshStandardMaterial({ color: 0xf5eedc, roughness: 0.5 });
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.06), collarMat);
    collar.position.set(0, 1.05, 0.16);
    this.bodyGroup.add(collar);

    // Arms
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.31, 1.0, 0);
    const lArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.44, 8), coatMat);
    lArmMesh.position.y = -0.22;
    lArmMesh.castShadow = true;
    this.leftArm.add(lArmMesh);
    this.bodyGroup.add(this.leftArm);

    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.31, 1.0, 0);
    const rArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.44, 8), coatMat);
    rArmMesh.position.y = -0.22;
    rArmMesh.castShadow = true;
    this.rightArm.add(rArmMesh);
    this.bodyGroup.add(this.rightArm);

    // Head
    this.head = new THREE.Group();
    this.head.position.set(0, 1.25, 0);

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf3cfba, roughness: 0.5 });
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), skinMat);
    this.head.add(headMesh);

    const hairMat = new THREE.MeshStandardMaterial({ color: pal.hair, roughness: 0.8 });
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.7), hairMat);
    hair.position.y = 0.04;
    this.head.add(hair);

    if (pal.hat) {
      const hatBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.03, 16), coatMat);
      hatBrim.position.y = 0.15;
      const hatCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.14, 16), coatMat);
      hatCrown.position.y = 0.22;
      this.head.add(hatBrim, hatCrown);
    }
    this.bodyGroup.add(this.head);

    // 3. Overhead Canvas Billboard Bubble
    this.badgeCanvas = document.createElement('canvas');
    this.badgeCanvas.width = 256;
    this.badgeCanvas.height = 120;
    this.badgeContext = this.badgeCanvas.getContext('2d')!;

    this.badgeTexture = new THREE.CanvasTexture(this.badgeCanvas);
    this.badgeTexture.minFilter = THREE.LinearFilter;
    this.badgeTexture.magFilter = THREE.LinearFilter;

    const spriteMat = new THREE.SpriteMaterial({
      map: this.badgeTexture,
      transparent: true,
      depthTest: false
    });
    this.badgeSprite = new THREE.Sprite(spriteMat);
    this.badgeSprite.scale.set(1.6, 0.75, 1);
    this.badgeSprite.position.set(0, 2.15, 0);
    this.group.add(this.badgeSprite);

    this.drawBadge('...', '💭', 100, '#e8be5d');
  }

  public updateAnimation(isWalking: boolean, delta: number) {
    if (this.isSeated) {
      this.bodyGroup.position.y = -0.22;
      this.leftLeg.rotation.x = -Math.PI / 2.2;
      this.rightLeg.rotation.x = -Math.PI / 2.2;
      this.leftArm.rotation.x = -Math.PI / 3.0;
      this.rightArm.rotation.x = -Math.PI / 3.0;
      this.shadowMesh.visible = false;
      return;
    }

    this.shadowMesh.visible = true;
    this.bodyGroup.position.y = 0;

    if (isWalking) {
      this.walkTime += delta * 9;
      const swing = Math.sin(this.walkTime) * 0.55;
      this.leftLeg.rotation.x = swing;
      this.rightLeg.rotation.x = -swing;
      this.leftArm.rotation.x = -swing * 0.8;
      this.rightArm.rotation.x = swing * 0.8;
      this.bodyGroup.position.y = Math.abs(Math.sin(this.walkTime * 2)) * 0.05;
    } else {
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = 0;
      this.rightArm.rotation.x = 0;
      this.bodyGroup.position.y = 0;
    }
  }

  public setSeated(seated: boolean, seatRotationY?: number) {
    this.isSeated = seated;
    if (seatRotationY !== undefined) {
      this.group.rotation.y = seatRotationY;
    }
  }

  public updateStateVisual(state: CustomerState, order: CustomerOrder | null) {
    if (!order) {
      this.badgeSprite.visible = false;
      return;
    }

    this.badgeSprite.visible = true;
    const patiencePct = Math.max(0, Math.min(100, order.patience));
    let color = '#2ecc71';
    if (patiencePct < 30) {
      color = '#e74c3c';
    } else if (patiencePct < 60) {
      color = '#f39c12';
    }

    switch (state) {
      case 'ENTERING':
      case 'WALKING_TO_TABLE':
      case 'WALKING_TO_COUNTER':
        this.badgeSprite.visible = false;
        break;

      case 'SEATED_THINKING':
        this.drawBadge('Perusing Menu...', '💭', 100, '#d5c4a1');
        break;

      case 'READY_TO_ORDER':
        this.drawBadge(`Order Ready!`, `🛎️ ${order.dishIcon}`, patiencePct, color);
        break;

      case 'WAITING_FOR_FOOD':
        this.drawBadge(`${order.dishName}`, order.dishIcon, patiencePct, color);
        break;

      case 'EATING':
        this.drawBadge('Delicious! 😋', '🍴', 100, '#b8bb26');
        break;

      case 'PAYING':
        this.drawBadge(`Paid $${order.price + order.tip}`, '💰', 100, '#fabd2f');
        break;

      case 'LEAVING_HAPPY':
        this.drawBadge('Loved it! ⭐⭐⭐⭐⭐', '😊', 100, '#b8bb26');
        break;

      case 'LEAVING_ANGRY':
        this.drawBadge('Too slow! 💨', '😡', 0, '#fb4934');
        break;
    }
  }

  private drawBadge(text: string, icon: string, patiencePct: number, barColor: string) {
    const key = `${text}|${icon}|${Math.round(patiencePct / 2)}|${barColor}`;
    if (key === this.lastRenderKey) return;
    this.lastRenderKey = key;

    const ctx = this.badgeContext;
    const w = this.badgeCanvas.width;
    const h = this.badgeCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Speech bubble container background
    ctx.fillStyle = 'rgba(23, 20, 24, 0.92)';
    ctx.strokeStyle = '#d4af37'; // Bistro Brass
    ctx.lineWidth = 3;

    const bubbleX = 10;
    const bubbleY = 8;
    const bubbleW = w - 20;
    const bubbleH = h - 28;
    const radius = 16;

    // Draw rounded rect bubble
    ctx.beginPath();
    ctx.moveTo(bubbleX + radius, bubbleY);
    ctx.lineTo(bubbleX + bubbleW - radius, bubbleY);
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY, bubbleX + bubbleW, bubbleY + radius);
    ctx.lineTo(bubbleX + bubbleW, bubbleY + bubbleH - radius);
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY + bubbleH, bubbleX + bubbleW - radius, bubbleY + bubbleH);

    // Downward speech triangle
    ctx.lineTo(w / 2 + 10, bubbleY + bubbleH);
    ctx.lineTo(w / 2, bubbleY + bubbleH + 16);
    ctx.lineTo(w / 2 - 10, bubbleY + bubbleH);

    ctx.lineTo(bubbleX + radius, bubbleY + bubbleH);
    ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleH, bubbleX, bubbleY + bubbleH - radius);
    ctx.lineTo(bubbleX, bubbleY + radius);
    ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Dish/Emote Icon on left
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, bubbleX + 32, bubbleY + 34);

    // Text Label on right
    ctx.font = 'bold 19px "Cinzel", "Outfit", "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 4;
    // Truncate if too long
    const displayTxt = text.length > 17 ? text.substring(0, 16) + '...' : text;
    ctx.fillText(displayTxt, bubbleX + 64, bubbleY + 32);
    ctx.shadowBlur = 0;

    // Patience meter bar at the bottom
    const barX = bubbleX + 16;
    const barY = bubbleY + bubbleH - 14;
    const barW = bubbleW - 32;
    const barH = 6;

    // Bar background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(barX, barY, barW, barH, 3) : ctx.rect(barX, barY, barW, barH);
    ctx.fill();

    // Bar fill
    if (patiencePct > 0) {
      const fillW = Math.max(4, (barW * patiencePct) / 100);
      ctx.fillStyle = barColor;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(barX, barY, fillW, barH, 3) : ctx.rect(barX, barY, fillW, barH);
      ctx.fill();
    }

    this.badgeTexture.needsUpdate = true;
  }

  public dispose() {
    this.badgeTexture.dispose();
  }
}

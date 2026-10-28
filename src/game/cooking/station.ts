import * as THREE from 'three';
import { CookingState, StationType, CarriedItem } from './types';
import { RECIPES } from './recipes';

export class CookingStation {
  public id: string;
  public name: string;
  public type: StationType;
  public position: THREE.Vector3;
  
  public state: CookingState = 'IDLE';
  public loadedItems: CarriedItem[] = [];
  public currentOutput: CarriedItem | null = null;
  public cookTimer: number = 0;
  public targetCookTime: number = 0;
  public burnTimer: number = 0;
  public targetBurnTime: number = 0;

  // 3D Visual billboard badge
  public badgeGroup: THREE.Group;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private badgeTexture: THREE.CanvasTexture;
  private badgeSprite: THREE.Sprite;

  constructor(id: string, name: string, type: StationType, pos: THREE.Vector3) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.position = pos.clone();

    // Create 3D floating canvas badge
    this.canvas = document.createElement('canvas');
    this.canvas.width = 512;
    this.canvas.height = 192;
    this.ctx = this.canvas.getContext('2d')!;

    this.badgeTexture = new THREE.CanvasTexture(this.canvas);
    this.badgeTexture.colorSpace = THREE.SRGBColorSpace;
    this.badgeTexture.minFilter = THREE.LinearFilter;

    const spriteMat = new THREE.SpriteMaterial({
      map: this.badgeTexture,
      transparent: true,
      depthTest: false
    });
    this.badgeSprite = new THREE.Sprite(spriteMat);
    this.badgeSprite.scale.set(1.9, 0.72, 1);
    this.badgeSprite.position.set(pos.x, pos.y + 1.85, pos.z);

    this.badgeGroup = new THREE.Group();
    this.badgeGroup.add(this.badgeSprite);

    this.updateBadgeTexture();
  }

  public update(delta: number, onReadyChime?: () => void, onBurnAlarm?: () => void) {
    if (this.state === 'COOKING') {
      this.cookTimer += delta;
      if (this.cookTimer >= this.targetCookTime) {
        this.state = 'READY';
        this.cookTimer = this.targetCookTime;
        if (onReadyChime) onReadyChime();
      }
      this.updateBadgeTexture();
    } else if (this.state === 'READY') {
      this.burnTimer += delta;
      if (this.burnTimer >= this.targetBurnTime) {
        this.state = 'BURNT';
        this.currentOutput = {
          id: 'burnt_food',
          name: `Burnt ${this.currentOutput?.name || 'Meal'}`,
          icon: '🔥',
          type: 'burnt'
        };
        if (onBurnAlarm) onBurnAlarm();
      }
      this.updateBadgeTexture();
    }
  }

  /**
   * Redraws the 2D canvas texture for the 3D overhead floating badge
   */
  public updateBadgeTexture() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Pill background
    ctx.save();
    ctx.fillStyle = 'rgba(18, 19, 23, 0.9)';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (typeof (ctx as unknown as { roundRect?: Function }).roundRect === 'function') {
      (ctx as unknown as { roundRect: Function }).roundRect(10, 10, w - 20, h - 20, 24);
    } else {
      ctx.rect(10, 10, w - 20, h - 20);
    }
    ctx.fill();
    ctx.stroke();

    // Station Name Header
    ctx.font = 'bold 26px sans-serif';
    ctx.fillStyle = '#fbf7ee';
    ctx.textAlign = 'center';
    ctx.fillText(this.name, w / 2, 48);

    // Divider line
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(w - 30, 60);
    ctx.stroke();

    if (this.state === 'IDLE') {
      this.badgeGroup.visible = false;
      return;
    }

    this.badgeGroup.visible = true;

    if (this.state === 'PREPARING') {
      const count = this.loadedItems.length;
      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(`Assembling: ${count} Items Loaded`, w / 2, 98);

      // Ingredient icons preview
      const icons = this.loadedItems.map(i => i.icon).join(' ');
      ctx.font = '28px sans-serif';
      ctx.fillText(icons, w / 2, 142);
    } else if (this.state === 'COOKING') {
      const progress = Math.min(1, this.cookTimer / this.targetCookTime);
      const pct = Math.floor(progress * 100);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(`Cooking ${this.currentOutput?.icon || ''} ${pct}%`, w / 2, 95);

      // Progress bar
      const barW = w - 80;
      const barH = 20;
      const barX = 40;
      const barY = 114;

      ctx.fillStyle = '#2b1b13';
      ctx.fillRect(barX, barY, barW, barH);
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(barX, barY, barW * progress, barH);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.strokeRect(barX, barY, barW, barH);
    } else if (this.state === 'READY') {
      const remainingSec = Math.max(0, Math.ceil(this.targetBurnTime - this.burnTimer));
      ctx.font = 'bold 26px sans-serif';
      ctx.fillStyle = '#10b981';
      ctx.fillText(`✨ READY: ${this.currentOutput?.icon} ${this.currentOutput?.name}`, w / 2, 98);

      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#fcd34d';
      ctx.fillText(`[E] Collect! (Burns in ${remainingSec}s)`, w / 2, 140);
    } else if (this.state === 'BURNT') {
      ctx.font = 'bold 26px sans-serif';
      ctx.fillStyle = '#ef4444';
      ctx.fillText(`🔥 BURNT! Food Ruined`, w / 2, 98);

      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#fca5a5';
      ctx.fillText(`[E] Clear Burnt Food`, w / 2, 140);
    }

    ctx.restore();
    this.badgeTexture.needsUpdate = true;
  }

  public reset() {
    this.state = 'IDLE';
    this.loadedItems = [];
    this.currentOutput = null;
    this.cookTimer = 0;
    this.burnTimer = 0;
    this.targetCookTime = 0;
    this.targetBurnTime = 0;
    this.updateBadgeTexture();
  }
}

export interface InteractiveObject {
  id: string;
  name: string;
  zone: string;
  actionLabel: string;
  detailTitle: string;
  detailDescription: string;
  category: 'kitchen' | 'counter' | 'dining' | 'restroom';
  x: number;
  z: number;
  interactionRadius: number;
  icon: string;
}

export class InteractionSystem {
  private objects: InteractiveObject[] = [];
  private activeTarget: InteractiveObject | null = null;
  private onTargetChange?: (target: InteractiveObject | null) => void;
  private onTrigger?: (target: InteractiveObject) => void;

  public register(obj: InteractiveObject) {
    this.objects.push(obj);
  }

  public clear() {
    this.objects = [];
    this.activeTarget = null;
  }

  public setListeners(
    onTargetChange: (target: InteractiveObject | null) => void,
    onTrigger: (target: InteractiveObject) => void
  ) {
    this.onTargetChange = onTargetChange;
    this.onTrigger = onTrigger;
  }

  public update(playerX: number, playerZ: number) {
    let closestObj: InteractiveObject | null = null;
    let closestDistSq = Infinity;

    for (let i = 0; i < this.objects.length; i++) {
      const obj = this.objects[i];
      const dx = playerX - obj.x;
      const dz = playerZ - obj.z;
      const distSq = dx * dx + dz * dz;

      if (distSq <= obj.interactionRadius * obj.interactionRadius) {
        if (distSq < closestDistSq) {
          closestDistSq = distSq;
          closestObj = obj;
        }
      }
    }

    if (this.activeTarget?.id !== closestObj?.id) {
      this.activeTarget = closestObj;
      if (this.onTargetChange) {
        this.onTargetChange(this.activeTarget);
      }
    }
  }

  public interact(): InteractiveObject | null {
    if (this.activeTarget && this.onTrigger) {
      this.onTrigger(this.activeTarget);
      return this.activeTarget;
    }
    return null;
  }

  public getActiveTarget(): InteractiveObject | null {
    return this.activeTarget;
  }

  public getAllObjects(): InteractiveObject[] {
    return this.objects;
  }
}

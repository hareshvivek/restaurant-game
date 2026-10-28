export interface BoxCollider {
  id: string;
  name: string;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export class PhysicsSystem {
  private colliders: BoxCollider[] = [];

  public clear() {
    this.colliders = [];
  }

  public addBox(id: string, name: string, x: number, z: number, width: number, depth: number) {
    const halfW = width / 2;
    const halfD = depth / 2;
    this.colliders.push({
      id,
      name,
      minX: x - halfW,
      maxX: x + halfW,
      minZ: z - halfD,
      maxZ: z + halfD
    });
  }

  public getColliders(): BoxCollider[] {
    return this.colliders;
  }

  /**
   * Checks if circle at (px, pz) with given radius collides with any registered collider.
   */
  public checkCollision(px: number, pz: number, radius: number): boolean {
    const rSq = radius * radius;
    for (let i = 0; i < this.colliders.length; i++) {
      const b = this.colliders[i];
      const closestX = Math.max(b.minX, Math.min(px, b.maxX));
      const closestZ = Math.max(b.minZ, Math.min(pz, b.maxZ));
      const dx = px - closestX;
      const dz = pz - closestZ;
      if (dx * dx + dz * dz < rSq) {
        return true;
      }
    }
    return false;
  }

  /**
   * Resolves movement with wall sliding
   */
  public moveWithCollision(
    currentX: number,
    currentZ: number,
    dx: number,
    dz: number,
    radius: number
  ): { x: number; z: number } {
    let nextX = currentX;
    let nextZ = currentZ;

    // Try moving in X
    if (dx !== 0) {
      if (!this.checkCollision(currentX + dx, currentZ, radius)) {
        nextX = currentX + dx;
      }
    }

    // Try moving in Z
    if (dz !== 0) {
      if (!this.checkCollision(nextX, currentZ + dz, radius)) {
        nextZ = currentZ + dz;
      }
    }

    // Safety check: if diagonal movement ended in collision, keep closest valid axis
    if (this.checkCollision(nextX, nextZ, radius)) {
      if (!this.checkCollision(nextX, currentZ, radius)) {
        nextZ = currentZ;
      } else if (!this.checkCollision(currentX, nextZ, radius)) {
        nextX = currentX;
      } else {
        nextX = currentX;
        nextZ = currentZ;
      }
    }

    return { x: nextX, z: nextZ };
  }
}

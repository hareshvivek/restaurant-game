import { CarriedItem } from './types';

export class PlayerInventory {
  private carriedItem: CarriedItem | null = null;
  private onChangeListeners: Array<(item: CarriedItem | null) => void> = [];

  public getCarriedItem(): CarriedItem | null {
    return this.carriedItem;
  }

  public setCarriedItem(item: CarriedItem | null) {
    this.carriedItem = item;
    this.notify();
  }

  public clear() {
    this.carriedItem = null;
    this.notify();
  }

  public subscribe(cb: (item: CarriedItem | null) => void) {
    this.onChangeListeners.push(cb);
    cb(this.carriedItem);
  }

  public unsubscribe(cb: (item: CarriedItem | null) => void) {
    this.onChangeListeners = this.onChangeListeners.filter(l => l !== cb);
  }

  private notify() {
    for (const cb of this.onChangeListeners) {
      cb(this.carriedItem);
    }
  }
}

import { CarriedItem } from '../cooking/types';

export type CustomerState =
  | 'ENTERING'
  | 'WALKING_TO_TABLE'
  | 'WALKING_TO_COUNTER'
  | 'SEATED_THINKING'
  | 'READY_TO_ORDER'
  | 'WAITING_FOR_FOOD'
  | 'EATING'
  | 'PAYING'
  | 'LEAVING_HAPPY'
  | 'LEAVING_ANGRY';

export type OrderType = 'dine_in' | 'takeaway';

export type OrderStatus =
  | 'THINKING'
  | 'WAITING_TO_BE_TAKEN'
  | 'PREPARING'
  | 'READY_TO_SERVE'
  | 'EATING'
  | 'COMPLETED'
  | 'CANCELLED';

export interface CustomerOrder {
  id: string;
  customerId: string;
  customerName: string;
  type: OrderType;
  tableId?: string; // 'dining-table-1', 'dining-table-2', 'dining-table-3', 'booth-1', 'booth-2'
  targetLocationName: string; // 'Table 1', 'VIP Booth 1', 'Takeaway Counter'
  dishId: string; // 'dish_pizza', 'dish_burger', etc.
  dishName: string;
  dishIcon: string;
  recipeId: string;
  price: number;
  tip: number;
  status: OrderStatus;
  patience: number; // 0 to 100 percentage
  maxPatience: number; // in seconds (e.g. 90s)
  patienceRemainingSec: number;
}

export type TableCleanState = 'CLEAN' | 'OCCUPIED' | 'DIRTY';

export interface DiningTableSpot {
  id: string; // 'dining-table-1', etc.
  interactionId: string; // 'interact-dining-table-1', etc.
  name: string; // 'Dining Table 1'
  tableCenter: { x: number; z: number };
  seatPosition: { x: number; z: number };
  seatRotationY: number;
  isBooth: boolean;
  cleanState: TableCleanState;
  currentCustomerId: string | null;
}

export type IngredientCategory = 'grain' | 'meat' | 'produce' | 'dairy' | 'intermediate';

export interface Ingredient {
  id: string;
  name: string;
  icon: string;
  category: IngredientCategory;
  color: number;
  description: string;
}

export type ItemType = 'ingredient' | 'intermediate' | 'dish' | 'burnt';

export interface CarriedItem {
  id: string;
  name: string;
  icon: string;
  type: ItemType;
  recipeId?: string;
  orderId?: string;
  targetLocationName?: string;
  targetTableId?: string;
  isTakeaway?: boolean;
}

export type CookingState = 'IDLE' | 'PREPARING' | 'COOKING' | 'READY' | 'BURNT';

export type StationType =
  | 'prep_table'
  | 'stovetop_grill'
  | 'pizza_oven'
  | 'deep_fryer'
  | 'storage_fridge'
  | 'storage_pantry'
  | 'storage_produce'
  | 'trash_bin';

export interface RecipeStep {
  name: string;
  station: StationType;
  requiredItemIds: string[];
  producesItem: CarriedItem;
  cookTimeSec?: number;
  burnTimeSec?: number;
}

export interface Recipe {
  id: string;
  name: string;
  icon: string;
  category: 'pizza' | 'burger' | 'pasta' | 'sandwich' | 'fried_chicken';
  description: string;
  ingredients: string[]; // ingredient IDs required
  steps: RecipeStep[];
  finalDish: CarriedItem;
}

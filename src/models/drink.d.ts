export interface Drink {
  id: string;
  default: boolean;
  dateCreated: string;
  hidden: boolean;
  favorite: boolean;
  name: string;
  ingredients: Ingredient[];
  source: string;
  details: {
    category: string;
    color: string;
    glassType: string;
    ice: string; // type of ice that the drink is served with (chips, single cube, rocks, etc.)
  };
  steps: string;
}

export type IngredientUnitCode = string;

export interface IPossibleIngredientUnit {
  code: IngredientUnitCode; // stored in DB and used in JSON data
  name: string; // shown to user
}

export interface Ingredient {
  name: string;
  type?: string; // can't be mandatory since won't be part of user input
  quantity: number;
  unit?: IngredientUnitCode;
}

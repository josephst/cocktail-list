export interface Drink {
  id: number;
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

export interface Ingredient {
  name: string;
  type: string;
  quantity: number;
  unit?: string;
}

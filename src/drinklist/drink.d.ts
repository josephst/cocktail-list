export interface Drink {
    id: number;
    default: boolean,
    dateCreated: string,
    hidden: boolean,
    favorite: boolean,
    name: string,
    ingredients: Ingredient[],
    details: {
      category: string,
      color: string,
      glassType: string,
      ice: string
    },
    steps: string,
}

export interface Ingredient {
  name: string,
  type: string,
  quantity: number,
  unit?: string
}
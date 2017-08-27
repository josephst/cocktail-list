export interface Drink {
    id: number;
    default: boolean,
    dateCreated: string,
    hidden: boolean,
    favorite: boolean,
    name: string,
    ingredients: Array<{
      // refers to the Ingredient interface
      ref: number,
      quantity: number,
      unit?: string,
    }>,
    details: {
      category: string,
      color: string,
      glassType: string,
      ice: string
    },
    steps: string,
}

export interface Ingredient {
  id: number,
  name: string,
  type: string
}
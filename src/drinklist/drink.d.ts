export interface Drink {
    id: number;
    default: boolean,
    dateCreated: string,
    hidden: boolean,
    favorite: boolean,
    name: string,
    ingredients: Array<{
      name: string;
      type: string;
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

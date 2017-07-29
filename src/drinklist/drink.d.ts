export interface Drink {
    id: number;
    default: boolean,
    dateCreated: string,
    hidden: boolean,
    favorite: boolean,
    name: string,
    ingredients: [{
      name: string,
      type: string,
      quantity: number,
      unit: string
    },
    {
      name: string,
      type: string,
      quantity: number,
      unit: string
    },
    {
      name: string,
      type: string,
      quantity: number,
      unit: string
    },
    {
      name: string,
      type: string,
      quantity: number,
      unit: null
    }
    ],
    details: {
      category: string,
      color: string,
      glassType: string,
      ice: string
    },
    steps: string[],
}
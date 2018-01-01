import { INetworkInterface } from '.';
import { makeDrink } from '../fixtures/drink';

import { Drink } from '../models/drink';

export class TestDrinkReceiver implements INetworkInterface {
  constructor() {
    return;
  }

  fetchDrinks = async () => {
    const drinks: Drink[] = [];
    for (let i = 0; i < 5; i++) {
      drinks.push(makeDrink());
    }
    return Promise.resolve(drinks);
  };
}

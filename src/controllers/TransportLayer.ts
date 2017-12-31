import { Drink } from '../typings/drink';

export interface INetworkInterface {
  fetchDrinks: () => Promise<Drink[]>;
}

export class TransportLayer implements INetworkInterface {
  constructor() {
    return;
  }

  fetchDrinks = async () => {
    return fetch('/data/db.json')
      .then(res => res.json())
      .then(json => json.drinks as Drink[]);
  };
}

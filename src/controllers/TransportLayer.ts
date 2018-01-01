import { Drink } from '../typings/drink';
import { INetworkInterface } from '.';

export class TransportLayer implements INetworkInterface {
  constructor() {
    return;
  }

  fetchDrinks = async () => {
    if (!window.fetch) {
      // unsupported browser
      return Promise.resolve([]);
    }
    return fetch('/data/db.json')
      .then(res => res.json())
      .then(json => json.drinks as Drink[]);
  };
}

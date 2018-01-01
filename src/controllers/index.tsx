import { Drink } from '../typings/drink';
import { TransportLayer } from './TransportLayer';

export interface INetworkInterface {
  fetchDrinks: () => Promise<Drink[]>;
}

export { TransportLayer };

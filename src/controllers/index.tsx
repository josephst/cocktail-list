import { Drink } from '../models/drink';
import { TransportLayer } from './TransportLayer';

export interface INetworkInterface {
  fetchDrinks: () => Promise<Drink[]>;
}

export { TransportLayer };

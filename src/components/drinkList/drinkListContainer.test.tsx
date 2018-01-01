import * as React from 'react';
import * as enzyme from 'enzyme';

import { TestDrinkReceiver } from '../../controllers/TestLayer';
import { DrinkStore } from '../../stores/drinkStore';

import { DrinkListContainer, IDrinkListProps } from './drinkListContainer';

let testDrinkReceiver: TestDrinkReceiver;
let drinkStore: DrinkStore;

beforeAll(() => {
  testDrinkReceiver = new TestDrinkReceiver();
  drinkStore = new DrinkStore(testDrinkReceiver);
  drinkStore.loadDrinks();
  return;
});

afterEach(() => {
  // wipe store and reload drinks
  drinkStore.drinks = [];
  drinkStore.loadDrinks();
});

const makeProps: () => IDrinkListProps = () => {
  return {
    displayFavorites: false,
    drinkStore: drinkStore,
  };
};

it('renders without crashing', () => {
  const props: IDrinkListProps = makeProps();
  enzyme.shallow(<DrinkListContainer {...props} />);
});

import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkModel } from '../../models/DrinkModel';
import { TestDrinkReceiver } from '../../controllers/TestLayer';
import { DrinkStore } from '../../stores/drinkStore';

import { DrinkList, IDrinkListProps } from './drinkList';

let testDrinkReceiver: TestDrinkReceiver;
let drinkStore: DrinkStore;

beforeAll(() => {
  testDrinkReceiver = new TestDrinkReceiver();
  drinkStore = new DrinkStore(testDrinkReceiver);
  drinkStore.loadDrinks();
  return;
});

afterEach(() => {
  // wipe drinks and load new ones
  drinkStore.drinks = [];
  drinkStore.loadDrinks();
});

const makeProps: () => IDrinkListProps = () => {
  return {
    drinks: [new DrinkModel(drinkStore)],
    loading: false,
    pageTitle: 'Drink List',
  };
};

it('renders without crashing', () => {
  enzyme.shallow(<DrinkList {...makeProps()} />);
});

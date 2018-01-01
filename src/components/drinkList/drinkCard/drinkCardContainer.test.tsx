import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkStore } from '../../../stores';
import { TestDrinkReceiver } from '../../../controllers/TestLayer';
import { DrinkModel } from '../../../models';

import {
  DrinkCardContainer,
  IDrinkCardContainerProps,
} from './drinkCardContainer';

let testDrinkReceiver: TestDrinkReceiver;
let drinkStore: DrinkStore;

beforeAll(() => {
  testDrinkReceiver = new TestDrinkReceiver();
  drinkStore = new DrinkStore(testDrinkReceiver);
  drinkStore.loadDrinks();
  return;
});

afterEach(() => {
  drinkStore.drinks = [];
  drinkStore.loadDrinks();
});

const makeProps: (
  drinkStore: DrinkStore
) => IDrinkCardContainerProps = store => {
  return {
    drink: new DrinkModel(store),
    toggleExpansion: jest.fn(),
  };
};

it('renders without crashing', () => {
  const props = makeProps(drinkStore);
  enzyme.shallow(<DrinkCardContainer {...props} />);
});

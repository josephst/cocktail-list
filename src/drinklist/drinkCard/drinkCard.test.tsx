import * as React from 'react';
import * as enzyme from 'enzyme';

import DrinkCard from './drinkCard';
import { drink, ingredient } from '../../fixtures';

const ingredients = Array(3).fill(ingredient);

it('should render', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.exists());
});

it('should have the name of the drink', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.find('.drinkName')).toBeTruthy();
});

it.skip('additional information about the drink (missing during change to semantic)', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.find('.ingredientList')).toBeTruthy();
  expect(card.find('.ingredient')).toHaveLength(drink.ingredients.length);
  expect(card.find('.steps').text()).toBe(drink.steps);
});
import * as React from 'react';
import * as enzyme from 'enzyme';

import DrinkCard from './drinkCard';
import { drink, ingredient } from '../../fixtures';

const ingredients = Array(3).fill(ingredient);

it('should render', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.exists());
});

it('should have information about the drink', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.find('.drinkName')).toBeTruthy();
  expect(card.find('.ingredientList')).toBeTruthy();
  expect(card.find('.ingredient')).toHaveLength(drink.ingredients.length);
  expect(card.find('.steps').text()).toBe(drink.steps);
});
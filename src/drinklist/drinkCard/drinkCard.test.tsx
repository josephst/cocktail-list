import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkListItem } from './drinkCard';
import { drink } from '../../fixtures';

it('should render', () => {
  const card = enzyme.shallow(<DrinkListItem drink={drink} updateSidebarView={jest.fn()}/>);
  expect(card.exists());
});

it('should have the name of the drink', () => {
  const card = enzyme.shallow(<DrinkListItem drink={drink} updateSidebarView={jest.fn()} />);
  expect(card.find('.drinkName')).toBeTruthy();
});

xit('additional information about the drink (missing during change to semantic)', () => {
  const card = enzyme.shallow(<DrinkListItem drink={drink} updateSidebarView={jest.fn()} />);
  expect(card.find('.ingredientList')).toBeTruthy();
  expect(card.find('.ingredient')).toHaveLength(drink.ingredients.length);
  expect(card.find('.steps').text()).toBe(drink.steps);
});
import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkCard } from './drinkCard';

import { makeDrink } from '../../../fixtures';

it('renders without crashing', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const div = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
    />
  );
  expect(div.exists()).toBeTruthy();
});

it('shows a title', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={drink.id}
      deleteDrink={deleteFn}
    />
  );
  expect(collapsed.containsMatchingElement(<h2>{drink.name}</h2>)).toBeTruthy();
});

it('shows a collapsed view', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
    />
  );
  expect(collapsed.containsMatchingElement(<h3>Ingredients</h3>)).toBeFalsy();
});

it('shows an expanded view', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={drink.id}
      deleteDrink={deleteFn}
    />
  );
  expect(expanded.containsMatchingElement(<h3>Ingredients</h3>)).toBeTruthy();
});

it('toggles favorites', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={drink.id}
      deleteDrink={deleteFn}
    />
  );
  expanded.find('#favoriteButton').simulate('click');
  expect(favoriteFn).toHaveBeenCalled();
});

it('toggles expansion', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
    />
  );
  expect(collapsed.containsMatchingElement(<h3>Ingredients</h3>)).toBeFalsy();
  collapsed.find('h2').simulate('click');

  // now expanded
  expect(expansionFn).toHaveBeenLastCalledWith(drink.id);
});

it('only shows the delete button on user-added drinks', () => {
  // default = true; no delete button
  const drink = makeDrink(); // default = true => not user-added
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expandedId={drink.id}
    />
  );
  expect(expanded.find('#deleteButton')).toHaveLength(0);

  // default = false; can be deleted
  const userDrink = makeDrink();
  userDrink.default = false;
  const expandedUserAdded = enzyme.shallow(
    <DrinkCard
      drink={userDrink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expandedId={userDrink.id}
    />
  );
  expect(expandedUserAdded.find('#deleteButton')).toHaveLength(1);
});

import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkCard } from '.';

import { makeDrink } from '../../../fixtures';

it('renders without crashing', () => {
  const drink = makeDrink(0);
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const div = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
    />
  );
  expect(div.exists()).toBeTruthy();
});

it('shows a title', () => {
  const id = 0;
  const drink = makeDrink(id);
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={-1}
    />
  );
  expect(collapsed.containsMatchingElement(<h2>{drink.name}</h2>)).toBeTruthy();
});

it('shows a collapsed view', () => {
  const id = 0;
  const drink = makeDrink(id);
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={-1}
    />
  );
  expect(collapsed.containsMatchingElement(<h3>Ingredients</h3>)).toBeFalsy();
});

it('shows an expanded view', () => {
  const id = 0;
  const drink = makeDrink(id);
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={id}
    />
  );
  expect(expanded.containsMatchingElement(<h3>Ingredients</h3>)).toBeTruthy();
});

it('toggles favorites', () => {
  const id = 0;
  const drink = makeDrink(id);
  expect(drink.favorite).toBeTruthy();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={-1}
    />
  );
  collapsed.find('#favoriteButton').simulate('click');
  expect(favoriteFn).toHaveBeenCalled();
});

it('toggles expansion', () => {
  const id = 0;
  let expandedId = -1;
  const drink = makeDrink(id);
  expect(drink.favorite).toBeTruthy();
  const expansionFn = jest.fn(
    (selectedId: number) => (expandedId = selectedId)
  );
  const favoriteFn = jest.fn();
  let collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClick={expansionFn}
      toggleFavorite={favoriteFn}
      expandedId={expandedId}
    />
  );
  expect(collapsed.containsMatchingElement(<h3>Ingredients</h3>)).toBeFalsy();
  collapsed.find('h2').simulate('click');
  collapsed = collapsed.update();

  // now expanded
  expect(expansionFn).toHaveBeenLastCalledWith(id);
  expect(expandedId).toBe(id);
});

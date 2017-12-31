import * as React from 'react';
import * as enzyme from 'enzyme';
import { Collapse } from 'react-bootstrap';

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
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expanded={true}
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
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      expanded={false}
      deleteDrink={deleteFn}
    />
  );
  expect(collapsed.find('.drinkTitle')).toHaveLength(1);
});

it('shows a collapsed view', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const collapsed = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expanded={false}
    />
  );
  expect(collapsed.find(Collapse).props().in).toBeFalsy();
});

it('shows an expanded view', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      expanded={true}
      deleteDrink={deleteFn}
    />
  );
  expect(expanded.find(Collapse).props().in).toBeTruthy();
});

it('toggles favorites', () => {
  const drink = makeDrink();
  const expansionFn = jest.fn();
  const favoriteFn = jest.fn();
  const deleteFn = jest.fn();
  const expanded = enzyme.shallow(
    <DrinkCard
      drink={drink}
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      expanded={true}
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
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expanded={false}
    />
  );
  expect(collapsed.find(Collapse).props().in).toBeFalsy();
  collapsed.find('.drinkTitle').simulate('click');

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
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expanded={true}
    />
  );
  expect(expanded.find('#deleteButton')).toHaveLength(0);

  // default = false; can be deleted
  const userDrink = makeDrink();
  userDrink.default = false;
  const expandedUserAdded = enzyme.shallow(
    <DrinkCard
      drink={userDrink}
      handleClickForExpansion={expansionFn}
      toggleFavorite={favoriteFn}
      deleteDrink={deleteFn}
      expanded={true}
    />
  );
  expect(expandedUserAdded.find('#deleteButton')).toHaveLength(1);
});

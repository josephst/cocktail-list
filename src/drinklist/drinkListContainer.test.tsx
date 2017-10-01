import * as React from 'react';
import * as enzyme from 'enzyme';
import { range } from 'lodash';

import { DrinkListContainer } from './drinkListContainer';

import { makeDrink } from '../fixtures';

it('should provide a list of drinks on successful network request', async () => {
  window.fetch = jest.fn().mockReturnValueOnce(
    Promise.resolve(new Response(
      JSON.stringify({ drinks: [makeDrink(0)] }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    ))
  );
  const container = enzyme.shallow(<DrinkListContainer />);
  const data = await (container.instance() as DrinkListContainer).fetchData();
  expect(data.drinks).toHaveLength(1);
});

it('should populate an error message on unsuccessful network request', async () => {
  expect.assertions(1);
  window.fetch = jest.fn().mockReturnValueOnce(
    Promise.resolve(new Response(
      '',
      {
        status: 404,
      }
    ))
  );
  const container = enzyme.shallow(<DrinkListContainer />);
  try {
    await (container.instance() as DrinkListContainer).fetchData();
  } catch (err) {
    expect(err).toBeTruthy();
  }
});

it('should sort first by category, then by name', async () => {
  const length = 3;
  const drinks = range(0, length).map((val) => makeDrink(val));
  drinks[0].details.category = 'z';
  drinks[1].details.category = 'a';
  const container = enzyme.shallow(<DrinkListContainer />);
  container.setState({ allDrinks: (container.instance() as DrinkListContainer).sortDrinks(drinks)});
  expect(container.state().allDrinks).toHaveLength(length);
  
  // category
  expect(container.state().allDrinks[0].details.category).toBe('a');
});
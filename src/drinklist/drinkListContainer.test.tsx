import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkListContainer } from './drinkListContainer';

import { drink } from '../fixtures';

it('should provide a list of drinks on successful network request', async () => {
  window.fetch = jest.fn().mockReturnValueOnce(
    Promise.resolve(new Response(
      JSON.stringify({ drinks: [drink] }),
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
    await (container.instance() as DrinkListContainer).fetchData().catch();
  } catch (err) {
    expect(err).toBeTruthy();
  }
});
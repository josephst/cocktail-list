import * as React from 'react';
import * as enzyme from 'enzyme';

import { AddDrink, IAddDrinkProps } from './add';

const addDrinkProps = {
  favorite: false,
  ingredients: [],
  name: '',
  source: '',
  steps: '',
  successfullyAdded: true,
};

it('renders without crashing', () => {
  const saveDrink = jest.fn();
  const handleInstructionInput = jest.fn();
  const handleNameInput = jest.fn();
  const handleSourceInput = jest.fn();
  const handleIngredientInput = jest.fn();
  const handleNewIngredientClick = jest.fn();
  const props: IAddDrinkProps = {
    handleInstructionInput,
    handleIngredientInput,
    handleNewIngredientClick,
    handleNameInput,
    handleSourceInput,
    saveDrink,
    ...addDrinkProps,
  };
  const div = enzyme.shallow(<AddDrink {...props} />);
  expect(div.exists()).toBeTruthy();
});

it('shows a "successfully added message"', () => {
  const saveDrink = jest.fn();
  const handleInstructionInput = jest.fn();
  const handleNameInput = jest.fn();
  const handleSourceInput = jest.fn();
  const handleIngredientInput = jest.fn();
  const handleNewIngredientClick = jest.fn();
  const props: IAddDrinkProps = {
    handleInstructionInput,
    handleIngredientInput,
    handleNewIngredientClick,
    handleNameInput,
    handleSourceInput,
    saveDrink,
    ...addDrinkProps,
  };
  const div = enzyme.shallow(<AddDrink {...props} />);
  expect(
    div
      .find('#success')
      .parent()
      .props().in
  ).toBeTruthy();
});

it('does not show a "successfully added message" at first', () => {
  const saveDrink = jest.fn();
  const handleInstructionInput = jest.fn();
  const handleNameInput = jest.fn();
  const handleSourceInput = jest.fn();
  const handleIngredientInput = jest.fn();
  const handleNewIngredientClick = jest.fn();
  const props: IAddDrinkProps = {
    handleInstructionInput,
    handleIngredientInput,
    handleNewIngredientClick,
    handleNameInput,
    handleSourceInput,
    saveDrink,
    ...addDrinkProps,
    successfullyAdded: false,
  };
  const div = enzyme.shallow(<AddDrink {...props} />);
  expect(
    div
      .find('#success')
      .parent()
      .props().in
  ).toBeFalsy();
});

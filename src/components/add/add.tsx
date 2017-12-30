import * as React from 'react';

import { IAddedIngredient } from './ingredient';
import { AddIngredient } from './ingredient';

export interface IAddDrinkProps {
  name: string;
  ingredients: IAddedIngredient[];
  steps: string;
  source: string;
  favorite: boolean;
  handleIngredientInput: (updatedIng: IAddedIngredient) => void;
  handleNameInput: (name: string) => void;
  handleInstructionInput: (instructions: string) => void;
  handleSourceInput: (source: string) => void;
  saveDrink: () => void;

  // UI vars
  successfullyAdded: boolean;
}

export const AddDrink: React.SFC<IAddDrinkProps> = (props: IAddDrinkProps) => {
  return (
    <div>
      <h2>Add New Drink</h2>
      Note to self: this component could also be used to modify existing drinks!
      <div>
        <label htmlFor="nameInput">
          <input
            type="text"
            name="drinkName"
            id="nameInput"
            value={props.name}
            onChange={e => props.handleNameInput(e.target.value)}
          />
        </label>
        <ul>
          {/* map existing ingredients, then add a +1 for inputting additional ingredients */}
          {props.ingredients.map(ing => (
            <li key={ing.id}>
              <AddIngredient
                {...ing}
                saveIngredient={props.handleIngredientInput}
                hasBeenSubmitted={true}
              />
            </li>
          ))}
          <li key={props.ingredients.length}>
            <AddIngredient
              name=""
              quantity={0}
              unit=""
              saveIngredient={props.handleIngredientInput}
              id={props.ingredients.length}
              hasBeenSubmitted={false}
            />
          </li>
        </ul>
        <label htmlFor="instructionsInput">
          Instructions:
          <input
            type="text"
            name="instructions"
            id="instructionsInput"
            value={props.steps}
            onChange={e => props.handleInstructionInput(e.target.value)}
          />
        </label>
        <label htmlFor="sourceInput">
          Source:
          <input
            type="text"
            name="source"
            id="sourceInput"
            value={props.source}
            onChange={e => props.handleSourceInput(e.target.value)}
          />
        </label>
        <button type="submit" onClick={() => props.saveDrink()}>
          Submit
        </button>
      </div>
      {props.successfullyAdded && (
        <div className="success">Added successfully!</div>
      )}
    </div>
  );
};

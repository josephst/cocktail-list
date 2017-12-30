import * as React from 'react';
import {
  Alert,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  PageHeader,
} from 'react-bootstrap';

import { IAddedIngredient } from './ingredient';

export interface IAddDrinkProps {
  name: string;
  ingredients: JSX.Element[];
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
      <PageHeader>Add New Drink</PageHeader>
      <form autoComplete="off">
        <FormGroup controlId="drinkName">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            autoComplete="off"
            value={props.name}
            placeholder="Enter drink name"
            onChange={e =>
              props.handleNameInput((e.target as HTMLInputElement).value)
            }
          />
        </FormGroup>
        <ControlLabel>Ingredients</ControlLabel>
        <ul>
          {props.ingredients.map(ing => <li key={ing.props.id}>{ing}</li>)}
        </ul>
        <FormGroup controlId="drinkInstructions">
          <ControlLabel>Instructions</ControlLabel>
          <FormControl
            type="text"
            autoComplete="off"
            value={props.steps}
            placeholder="Instructions for mixing drink"
            onChange={e =>
              props.handleInstructionInput((e.target as HTMLInputElement).value)
            }
          />
        </FormGroup>
        <FormGroup controlId="drinkSource">
          <ControlLabel>Source</ControlLabel>
          <FormControl
            type="text"
            autoComplete="off"
            value={props.source}
            placeholder="Recipe source"
            onChange={e =>
              props.handleSourceInput((e.target as HTMLInputElement).value)
            }
          />
        </FormGroup>
        <Button
          type="submit"
          bsStyle="primary"
          onClick={() => props.saveDrink()}
        >
          Save
        </Button>
        {props.successfullyAdded && (
          <Alert id="success" bsStyle="success">
            Added successfully!
          </Alert>
        )}
      </form>
    </div>
  );
};

import * as React from 'react';
import {
  Alert,
  Button,
  FormGroup,
  ListGroup,
  ListGroupItem,
  ControlLabel,
  Form,
  FormControl,
  Col,
  PageHeader,
  Fade,
  Glyphicon,
} from 'react-bootstrap';

import { IAddedIngredient } from './ingredient';

export interface IAddDrinkProps {
  name: string;
  ingredients: JSX.Element[];
  steps: string;
  source: string;
  favorite: boolean;
  // ingredient logic
  handleIngredientInput: (updatedIng: IAddedIngredient) => void;
  handleNewIngredientClick: () => void;
  // other logic
  handleNameInput: (name: string) => void;
  handleInstructionInput: (instructions: string) => void;
  handleSourceInput: (source: string) => void;
  saveDrink: (e: React.MouseEvent<Button>) => void;

  // UI vars
  successfullyAdded: boolean;
}

const COLUMN_SIZES_XS = {
  label: 3,
  input: 9,
};

const COLUMN_SIZES_SM = {
  label: 2,
  input: 10,
};

export const AddDrink: React.SFC<IAddDrinkProps> = (props: IAddDrinkProps) => {
  return (
    <div>
      <PageHeader>Add New Drink</PageHeader>
      <Form autoComplete="off" horizontal={true}>
        <FormGroup controlId="drinkName">
          <Col
            componentClass={ControlLabel}
            xs={COLUMN_SIZES_XS.label}
            sm={COLUMN_SIZES_SM.label}
          >
            Name
          </Col>
          <Col xs={COLUMN_SIZES_XS.input} sm={COLUMN_SIZES_SM.input}>
            <FormControl
              type="text"
              autoComplete="off"
              value={props.name}
              placeholder="Enter drink name"
              onChange={e =>
                props.handleNameInput((e.target as HTMLInputElement).value)
              }
            />
          </Col>
        </FormGroup>
        <Col xs={12}>
          <FormGroup controlId="ingredientList">
            <ControlLabel>Ingredients</ControlLabel>
            <ListGroup>
              {props.ingredients.map(ing => (
                <ListGroupItem key={ing.props.id}>{ing}</ListGroupItem>
              ))}
            </ListGroup>
          </FormGroup>
          <FormGroup>
            <ControlLabel srOnly={true}>Add Another Ingredient</ControlLabel>
            <Button onClick={() => props.handleNewIngredientClick()}>
              <Glyphicon glyph="plus" />
            </Button>
          </FormGroup>
        </Col>
        <FormGroup controlId="drinkInstructions">
          <Col
            componentClass={ControlLabel}
            xs={COLUMN_SIZES_XS.label}
            sm={COLUMN_SIZES_SM.label}
          >
            Instructions
          </Col>
          <Col xs={COLUMN_SIZES_XS.input} sm={COLUMN_SIZES_SM.input}>
            <FormControl
              type="text"
              autoComplete="off"
              value={props.steps}
              placeholder="Instructions for mixing drink"
              onChange={e =>
                props.handleInstructionInput(
                  (e.target as HTMLInputElement).value
                )
              }
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="drinkSource">
          <Col
            componentClass={ControlLabel}
            xs={COLUMN_SIZES_XS.label}
            sm={COLUMN_SIZES_SM.label}
          >
            Source
          </Col>
          <Col xs={COLUMN_SIZES_XS.input} sm={COLUMN_SIZES_SM.input}>
            <FormControl
              type="text"
              autoComplete="off"
              value={props.source}
              placeholder="Recipe source"
              onChange={e =>
                props.handleSourceInput((e.target as HTMLInputElement).value)
              }
            />
          </Col>
        </FormGroup>
        <Button type="button" bsStyle="primary" onClick={props.saveDrink}>
          Save
        </Button>
        <Fade in={props.successfullyAdded}>
          <Alert id="success" bsStyle="success">
            Added successfully!
          </Alert>
        </Fade>
      </Form>
    </div>
  );
};

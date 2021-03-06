import * as React from 'react';
import { v1 as uuid } from 'uuid';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

import { DrinkStore } from '../../stores';
import { AddDrink, IAddDrinkProps } from './add';
import { IAddedIngredient, IngredientContainer } from './ingredient';
import { action } from 'mobx';

interface IAddDrinkContainerProps {
  drinkStore?: DrinkStore;
}

interface IAddDrinkState {
  name: string;
  ingredients: IAddedIngredient[];
  steps: string;
  source: string;
  favorite: boolean;
  successfullyAdded: boolean;
}

@inject((allStores: { drinkStore: DrinkStore }) => ({
  drinkStore: allStores.drinkStore,
}))
@observer
export class AddDrinkContainer extends React.Component<
  IAddDrinkContainerProps,
  IAddDrinkState
> {
  static createEmptyIngredient: () => IAddedIngredient = () => ({
    id: uuid(),
    name: '',
    quantity: 0,
    unit: '',
  });

  constructor(props: IAddDrinkContainerProps) {
    super(props);
    this.state = {
      name: '',
      ingredients: [AddDrinkContainer.createEmptyIngredient()],
      steps: '',
      source: '',
      favorite: false,
      successfullyAdded: false,
    };
  }

  handleIngredientInput = (updatedIng: IAddedIngredient) => {
    const ingredientIndex = this.state.ingredients.findIndex(
      ing => ing.id === updatedIng.id
    );
    if (ingredientIndex !== -1) {
      const newIngredientList = this.state.ingredients.slice();
      newIngredientList.splice(ingredientIndex, 1, updatedIng);
      this.setState({ ingredients: newIngredientList });
    } else {
      this.setState({ ingredients: this.state.ingredients.concat(updatedIng) });
    }
  };

  handleDeleteIngredient = (deletedIng: IAddedIngredient) => {
    // don't empty array, just clear the last item
    if (this.state.ingredients.length === 1) {
      this.setState({
        ingredients: [AddDrinkContainer.createEmptyIngredient()],
      });
    } else {
      // if we've >1 ingredient, clear the selected one
      const deletedIndex = this.state.ingredients.findIndex(
        ing => ing.id === deletedIng.id
      );
      if (deletedIndex !== -1) {
        const updatedIngredients = this.state.ingredients.slice();
        updatedIngredients.splice(deletedIndex, 1);
        this.setState({ ingredients: updatedIngredients });
      }
    }
  };

  handleNewIngredientClick = () => {
    this.setState({
      ingredients: this.state.ingredients.concat([
        {
          name: '',
          quantity: 0,
          unit: '',
          id: uuid(),
        },
      ]),
    });
  };

  handleNameInput = (name: string) => {
    this.setState({ name });
  };

  handleInstructionInput = (instructions: string) => {
    this.setState({ steps: instructions });
  };

  handleSourceInput = (source: string) => {
    this.setState({ source });
  };

  @action
  saveDrink = (e: React.MouseEvent<Button>) => {
    e.preventDefault();
    if (this.props.drinkStore) {
      const newDrink = this.props.drinkStore.createDrink();
      const now = new Date();
      newDrink.updateFromJson({
        id: newDrink.id, // we're ignoring this, but TS requires that we have it
        dateCreated: now.toUTCString(),
        default: false,
        details: {
          category: 'user-added',
          color: 'unknown',
          glassType: 'unknown',
          ice: 'unknown',
        },
        favorite: this.state.favorite,
        hidden: false,
        ingredients: this.state.ingredients.filter(ing => ing.name !== ''),
        name: this.state.name,
        source: this.state.source,
        steps: this.state.steps,
      });
    }
    this.clearInput();
    this.setState({ successfullyAdded: true });
    setTimeout(() => this.setState({ successfullyAdded: false }), 3000);
  };

  clearInput = () => {
    this.setState({
      favorite: false,
      ingredients: [],
      name: '',
      source: '',
      steps: '',
    });
  };

  render() {
    const ingredientContainers = this.state.ingredients.map(ing => (
      <IngredientContainer
        {...ing}
        handleIngredientInput={this.handleIngredientInput}
        handleDeleteIngredient={this.handleDeleteIngredient}
      />
    ));
    const props: IAddDrinkProps = {
      favorite: this.state.favorite,
      ingredients: ingredientContainers,
      name: this.state.name,
      source: this.state.source,
      steps: this.state.steps,
      // ingredient logic
      handleIngredientInput: this.handleIngredientInput,
      handleNewIngredientClick: this.handleNewIngredientClick,
      // other actions
      handleInstructionInput: this.handleInstructionInput,
      handleNameInput: this.handleNameInput,
      handleSourceInput: this.handleSourceInput,
      saveDrink: this.saveDrink,
      // UI vars
      successfullyAdded: this.state.successfullyAdded,
    };
    return <AddDrink {...props} />;
  }
}

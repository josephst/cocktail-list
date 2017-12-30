import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { DrinkStore } from '../../stores';
import { AddDrink, IAddDrinkProps } from './add';
import { IAddedIngredient, IngredientContainer } from './ingredient';

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
  constructor(props: IAddDrinkContainerProps) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
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
      const newIngredientList = this.state.ingredients.slice(0);
      newIngredientList.splice(ingredientIndex, 1, updatedIng);
      this.setState({ ingredients: newIngredientList });
    } else {
      this.setState({ ingredients: this.state.ingredients.concat(updatedIng) });
    }
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

  saveDrink = () => {
    if (this.props.drinkStore) {
      const newDrink = this.props.drinkStore.createNewDrink();
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
        ingredients: this.state.ingredients,
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
        saveIngredient={this.handleIngredientInput}
        hasBeenSubmitted={true}
      />
    ));
    ingredientContainers.push(
      <IngredientContainer
        name=""
        quantity={0}
        type=""
        unit=""
        saveIngredient={this.handleIngredientInput}
        hasBeenSubmitted={false}
        id={this.state.ingredients.length}
      />
    );
    const props: IAddDrinkProps = {
      favorite: this.state.favorite,
      ingredients: ingredientContainers,
      name: this.state.name,
      source: this.state.source,
      steps: this.state.steps,
      handleIngredientInput: this.handleIngredientInput,
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

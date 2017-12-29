import * as React from 'react';

import { AddIngredient } from './ingredient';

import { Drink, Ingredient } from '../../typings/drink';

interface AddedIngredient extends Ingredient {
  id: number;
}

interface AddDrinkProps {
  saveDrink: (newDrink: Drink) => void;
}

interface AddDrinkState {
  name: string;
  ingredients: AddedIngredient[];
  steps: string;
  source: string;
  favorite: boolean;
}

class AddDrink extends React.Component<AddDrinkProps, AddDrinkState> {
  // TODO: separate into presentation + container pattern?
  // might help with reuse when editing a drink
  constructor(props: AddDrinkProps) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      steps: '',
      source: '',
      favorite: false,
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleIngredientInput = this.handleIngredientInput.bind(this);
    this.handleInstructionInput = this.handleInstructionInput.bind(this);
    this.handleSourceInput = this.handleSourceInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleNameInput(name: string) {
    this.setState({ name });
  }

  handleIngredientInput(updatedIng: Ingredient, id: number) {
    const ingredientIndex = this.state.ingredients.findIndex(
      ing => ing.id === id
    );
    if (ingredientIndex === -1) {
      // new ingredient
      this.setState({
        ingredients: this.state.ingredients.concat([{ ...updatedIng, id }]),
      });
    } else {
      // modified existing ingredient
      // remove old copy of ingredient
      const newIngredientList = this.state.ingredients.concat([]);
      newIngredientList.splice(ingredientIndex, 1, { ...updatedIng, id });
      this.setState({ ingredients: newIngredientList });
    }
  }

  handleInstructionInput(steps: string) {
    this.setState({ steps });
  }

  handleSourceInput(source: string) {
    this.setState({ source });
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert(
      'Until MobX added, this is as close as you can get to submitting a drink'
    );
    // clear entries to prepare for adding another drink
    this.clearInput();
  }

  clearInput() {
    this.setState({
      name: '',
      ingredients: [],
      steps: '',
      source: '',
      favorite: false,
    });
  }

  render() {
    return (
      <div>
        <h2>Add New Drink</h2>
        Note to self: this component could also be used to modify existing
        drinks!
        <div>
          <label htmlFor="nameInput">
            <input
              type="text"
              name="drinkName"
              id="nameInput"
              value={this.state.name}
              onChange={e => this.handleNameInput(e.target.value)}
            />
          </label>
          <ul>
            {/* map existing ingredients, then add a +1 for inputting additional ingredients */}
            {this.state.ingredients.map(ing => (
              <li key={ing.id}>
                <AddIngredient
                  {...ing}
                  saveIngredient={this.handleIngredientInput}
                  hasBeenSubmitted={true}
                />
              </li>
            ))}
            <li key={this.state.ingredients.length}>
              <AddIngredient
                saveIngredient={this.handleIngredientInput}
                id={this.state.ingredients.length}
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
              value={this.state.steps}
              onChange={e => this.handleInstructionInput(e.target.value)}
            />
          </label>
          <label htmlFor="sourceInput">
            Source:
            <input
              type="text"
              name="source"
              id="sourceInput"
              value={this.state.source}
              onChange={e => this.handleSourceInput(e.target.value)}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export { AddDrink };

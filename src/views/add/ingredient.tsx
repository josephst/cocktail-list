import * as React from 'react';

import { Ingredient } from '../../typings/drink';

interface NewIngredientProps {
  id: number;
  saveIngredient: (ing: Ingredient, id: number) => void;
  hasBeenSubmitted: boolean;

  // in case of modifying existing ingredient
  name?: string;
  quantity?: number;
  unit?: string;
  source?: string;
}

interface NewIngredientState {
  name: string;
  quantity: number;
  unit: string;
}

class AddIngredient extends React.Component<
  NewIngredientProps,
  NewIngredientState
> {
  constructor(props: NewIngredientProps) {
    super(props);
    this.state = {
      name: this.props.name || '',
      quantity: this.props.quantity || 0,
      unit: this.props.unit || '',
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleUnitSelection = this.handleUnitSelection.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuantity(quantity: number) {
    this.setState({ quantity });
  }

  handleUnitSelection(unit: string) {
    this.setState({ unit });
  }

  handleName(name: string) {
    this.setState({ name });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ingredient: Ingredient = {
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit === '' ? undefined : this.state.unit,
    };
    this.props.saveIngredient(ingredient, this.props.id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="quantity">
          Quantity:
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={this.state.quantity}
            onChange={e => this.handleQuantity(Number.parseInt(e.target.value))}
          />
        </label>
        <select
          name="unit"
          id="unit"
          value={this.state.unit}
          onChange={e => this.handleUnitSelection(e.target.value)}
        >
          Unit:
          <option value="oz">oz.</option>
          <option value="cL">cL.</option>
          <option value="" />
        </select>
        <label htmlFor="ingredientName">
          Name:
          <input
            type="text"
            name="ingredientName"
            id="ingredientName"
            value={this.state.name}
            onChange={e => this.handleName(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          style={{ color: `${this.props.hasBeenSubmitted ? 'green' : 'red'}` }}
        />
      </form>
    );
  }
}

export { AddIngredient };

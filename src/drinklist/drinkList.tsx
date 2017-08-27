import * as React from 'react';

import { DrinkCard } from './drinkCard';

import { Drink, Ingredient } from './drink';

interface DrinkListProps {
  drinks: Drink[];
  ingredients: Ingredient[];
}

class DrinkList extends React.Component<DrinkListProps, {}> {
  render() {
    return (
      <div>
        <ul>
          {this.props.drinks.map((drink, index) =>
            <li key={index}><DrinkCard drink={drink} ingredients={this.props.ingredients} /></li>)
          }
        </ul>
      </div>
    );
  }
}

export { DrinkList };
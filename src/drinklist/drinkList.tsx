import * as React from 'react';

import { DrinkCard } from './drinkCard';
import { Drink, Ingredient } from './drink';

import './drinkList.css';

interface DrinkListProps {
  drinks: Drink[];
  ingredients: Ingredient[];
}

class DrinkList extends React.Component<DrinkListProps, {}> {
  render() {
    return (
      <div className="DrinkList">
        {this.props.drinks.map((drink, index) =>
          <div key={index}><DrinkCard drink={drink} ingredients={this.props.ingredients} /></div>)
        }
      </div>
    );
  }
}

export { DrinkList };
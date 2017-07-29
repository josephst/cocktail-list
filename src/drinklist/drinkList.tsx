import { Component } from 'react';
import * as React from 'react';

import { Drink } from './drink';

interface DrinkListProps {
  drinks: Drink[];
}

class DrinkList extends Component<DrinkListProps, {}> {
  render() {
    return (
      <div>
        Drink list
        <ul>
          {this.props.drinks.map((drink, index) => <li key={index}>{drink.name}</li>)}
        </ul>
      </div>
    );
  }
}

export { DrinkList };
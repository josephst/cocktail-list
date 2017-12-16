import * as React from 'react';

import { Card } from './card/card';

import { Drink } from './drink';

interface DrinkListProps {
  drinks: Drink[];
}
interface DrinkListState {
  expandedDrink?: number;
}

class DrinkList extends React.Component<DrinkListProps, DrinkListState> {
  constructor(props: DrinkListProps) {
    super(props);
    this.state = { expandedDrink: undefined };
    this.expandDrink = this.expandDrink.bind(this);
  }

  expandDrink(id: number | undefined) {
    this.setState({ expandedDrink: id });
  }

  render() {
    return (
      <ul>
        {this.props.drinks &&
          this.props.drinks.map(drink => (
            <li key={drink.id}>
              <Card
                drink={drink}
                selectedDrinkId={this.state.expandedDrink}
                expandDrink={this.expandDrink}
              />
            </li>
          ))}
      </ul>
    );
  }
}

export { DrinkList };

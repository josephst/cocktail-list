import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

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
      <ListGroup>
        {this.props.drinks &&
          this.props.drinks.map(drink => (
            <Card
              drink={drink}
              selectedDrinkId={this.state.expandedDrink}
              expandDrink={this.expandDrink}
            />
          ))}
      </ListGroup>
    );
  }
}

export { DrinkList };

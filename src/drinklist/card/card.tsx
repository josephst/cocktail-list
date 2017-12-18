import * as React from 'react';
import { ListGroupItem } from 'react-bootstrap';

import { CardExpandedDetails } from './cardExpandedDetails';

import { Drink } from '../drink';

interface CardState {}

interface CardProps {
  drink: Drink;
  selectedDrinkId?: number;
  expandDrink: (id: number | undefined) => void;
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.selectedDrinkId === this.props.drink.id) {
      // collapse if currently showing
      this.props.expandDrink(undefined);
    } else {
      // show other drink
      this.props.expandDrink(this.props.drink.id);
    }
  }

  render() {
    const isExpanded = this.props.selectedDrinkId === this.props.drink.id;
    return (
      <ListGroupItem onClick={this.handleClick}>
        <b>{this.props.drink.name}</b>
        {isExpanded && <CardExpandedDetails drink={this.props.drink} />}
      </ListGroupItem>
    );
  }
}

export { Card };

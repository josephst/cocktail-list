import * as React from 'react';

import { ExpandedCard } from './expandedCard';

import { Drink } from '../drink';

import './card.css';

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
    return (
      <div>
        <button
          onClick={this.handleClick}
          className={this.props.drink.favorite ? 'favorite' : ''}
        >
          {this.props.drink.name}
        </button>
        <div>
          {this.props.selectedDrinkId &&
            this.props.selectedDrinkId === this.props.drink.id && (
              <ExpandedCard drink={this.props.drink} />
            )}
        </div>
      </div>
    );
  }
}

export { Card };

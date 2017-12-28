import * as React from 'react';

import { DrinkCard } from './drinkCard';

import { Drink, DrinkId } from '../../typings/drink';

interface DrinkListProps {
  toggleFavorite: (drinkId: number) => void;
  drinks: Drink[];
}

interface DrinkListState {
  expanded?: DrinkId;
}

class DrinkList extends React.Component<DrinkListProps, DrinkListState> {
  constructor(props: DrinkListProps) {
    super(props);
    this.state = { expanded: undefined };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (selectedId: DrinkId) => {
    // expand or collsape drinks
    if (selectedId === this.state.expanded) {
      // collapse if drink is selected after being expanded
      this.setState({ expanded: undefined });
    } else {
      // else, set new selection as being expanded
      this.setState({ expanded: selectedId });
    }
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.drinks.map(drink => (
            <li key={drink.id}>
              <DrinkCard
                drink={drink}
                toggleFavorite={this.props.toggleFavorite}
                expandedId={this.state.expanded}
                handleClick={this.handleClick}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export { DrinkList };

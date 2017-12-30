import * as React from 'react';

import { DrinkCardContainer } from './drinkCard';
import { DrinkModel, DrinkId } from '../../models/DrinkModel';

interface IDrinkListProps {
  drinks: DrinkModel[];
}

interface IDrinkListState {
  expanded?: DrinkId;
}

class DrinkList extends React.Component<IDrinkListProps, IDrinkListState> {
  constructor(props: IDrinkListProps) {
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
              <DrinkCardContainer
                drink={drink}
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

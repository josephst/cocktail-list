import * as React from 'react';
import { observer } from 'mobx-react';
import { PageHeader, ListGroup } from 'react-bootstrap';

import { DrinkCardContainer } from './drinkCard';
import { DrinkModel, DrinkId } from '../../models/DrinkModel';

interface IDrinkListProps {
  drinks: DrinkModel[];
  pageTitle: string;
  loading: boolean;
}

interface IDrinkListState {
  expandedDrinkId?: DrinkId;
}

@observer
class DrinkList extends React.Component<IDrinkListProps, IDrinkListState> {
  constructor(props: IDrinkListProps) {
    super(props);
    this.state = { expandedDrinkId: undefined };
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  toggleExpansion = (selectedId: DrinkId) => {
    // expand or collsape drinks
    if (selectedId === this.state.expandedDrinkId) {
      // collapse if drink is selected after being expanded
      this.setState({ expandedDrinkId: undefined });
    } else {
      // else, set new selection as being expanded
      this.setState({ expandedDrinkId: selectedId });
    }
  };

  render() {
    return (
      <div>
        <PageHeader>{this.props.pageTitle}</PageHeader>
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          <ListGroup>
            {this.props.drinks.map(drink => (
              <DrinkCardContainer
                drink={drink}
                key={drink.id}
                expandedId={this.state.expandedDrinkId}
                toggleExpansion={this.toggleExpansion}
              />
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export { DrinkList };

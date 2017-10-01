import * as React from 'react';
import { List, Loader, Grid, Responsive, Segment } from 'semantic-ui-react';

import { DrinkListItem } from './drinkCard';
import { DrinkFilter } from './search';
import { Sidebar } from './sidebar';

import { Drink } from './drink';
import { DrinkListShared } from './drinkListContainer';

import './drinkList.css';

interface DrinkListProps extends DrinkListShared {
  clearNetworkError: () => void;
  applyDrinkFilter: (term: string) => void;
}

interface DrinkListState {
  selectedDrink?: Drink;
}

class DrinkList extends React.Component<DrinkListProps, DrinkListState> {
  constructor() {
    super();
    this.state = {
      selectedDrink: undefined,
    };
  }
  closeMessageBox = () => {
    this.props.clearNetworkError();
  }

  handleDrinkSelection = (drink: Drink) => {
    this.setState({ selectedDrink: drink });
  }

  clearSelectedDrink: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    this.setState({ selectedDrink: undefined });
  }

  render() {
    // waiting on data
    if (this.props.loading) {
      return (
        <Grid container={true}>
          <Loader />
        </Grid>
      );
    }

    // have data
    const drinkItems = this.props.filteredDrinks.map((drink) => {
      return (
        <DrinkListItem key={drink.id} drink={drink} updateSidebarView={this.handleDrinkSelection} />
      );
    });
    return (
      <Grid container={true}>
        <Grid.Row divided={true}>
          <Grid.Column tablet={12} computer={12} mobile={16}>
            <Segment basic={true}>
              <DrinkFilter
                updateSearchTerm={this.props.applyDrinkFilter}
              />
            </Segment>
            {this.state.selectedDrink &&
              <Responsive as={Segment} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar drink={this.state.selectedDrink} clearSelectedDrink={this.clearSelectedDrink} />
              </Responsive>
            }
            <List className="DrinkList" size="huge" relaxed={true} divided={false} selection={true}>
              {drinkItems}
            </List>
          </Grid.Column>
          <Responsive as={Grid.Column} width={4} minWidth={Responsive.onlyTablet.minWidth}>
            {this.state.selectedDrink &&
              <Sidebar drink={this.state.selectedDrink} clearSelectedDrink={this.clearSelectedDrink} />
            }
          </Responsive>
        </Grid.Row>
      </Grid>
    );
  }
}

export { DrinkList };
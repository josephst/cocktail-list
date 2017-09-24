import * as React from 'react';
import { List, Grid, Segment } from 'semantic-ui-react';

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

  render() {
    const filteredDrinks = this.props.filteredDrinks.map((drink, index) => (
      <DrinkListItem drink={drink} updateSidebarView={this.handleDrinkSelection} key={drink.id} />
    ));
    return (
      <Grid container={true}>
        <Grid.Row divided={true}>
          <Grid.Column width={12}>
            <Segment basic={true}>
              <DrinkFilter
                updateSearchTerm={this.props.applyDrinkFilter}
              />
            </Segment>
            <List className="DrinkList" size={'huge'} relaxed={true} divided={true}>
              {filteredDrinks}
            </List>
          </Grid.Column>
          <Grid.Column width={4} floated="right">
            {this.state.selectedDrink && <Sidebar drink={this.state.selectedDrink} />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export { DrinkList };
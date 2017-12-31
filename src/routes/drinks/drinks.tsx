import * as React from 'react';
import { Switch, Route, match } from 'react-router';

import { DrinkListContainer } from '../../components/drinkList';

interface IDrinkViewProps {
  match: match<{}>;
}

/**
 * Routes for viewing drinks
 */
export class DrinksPage extends React.Component<IDrinkViewProps, {}> {
  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path={this.props.match.path}
          render={props => (
            <DrinkListContainer {...props} displayFavorites={false} />
          )}
        />
        <Route
          exact={true}
          path={this.props.match.path + '/favorites'}
          render={props => (
            <DrinkListContainer {...props} displayFavorites={true} />
          )}
        />
      </Switch>
    );
  }
}

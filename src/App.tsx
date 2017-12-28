import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom';

import {
  AboutApp,
  AddDrink,
  DrinkList,
  SearchForDrink,
  NotFound,
} from './views';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/drinks">All Drinks</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <hr />
            <li>
              <Link to="/add">Add</Link>
            </li>
            <hr />
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/drinks" />}
            />
            <Route path="/drinks" component={DrinkList} />
            <Route path="/favorites" component={DrinkList} />
            <Route path="/search" component={SearchForDrink} />
            <Route path="/add" component={AddDrink} />
            <Route path="/about" component={AboutApp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

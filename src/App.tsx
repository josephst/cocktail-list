import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  match,
} from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import { DrinkStore } from './stores/drinkStore';
import {
  AboutApp,
  AddDrinkContainer,
  DrinkListContainer,
  NotFound,
} from './components';

interface IAppProps {
  drinkStore: DrinkStore;
}

interface IHomeProps {
  match: match<{}>;
}

const Home: React.SFC<IHomeProps> = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/drinks">All Drinks</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
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
      </nav>
      <Switch>
        <Redirect exact={true} from={props.match.url} to="/drinks" />
        <Route
          path={props.match.url + 'drinks'}
          component={DrinkListContainer}
        />
        {/* TODO: rewrite favorites as a higher order component or something using nested routes? */}
        <Route
          path={props.match.url + 'favorites'}
          component={DrinkListContainer}
        />
        <Route path={props.match.url + 'add'} component={AddDrinkContainer} />
        <Route path={props.match.url + 'about'} component={AboutApp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

@observer
class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <Provider drinkStore={new DrinkStore()}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;

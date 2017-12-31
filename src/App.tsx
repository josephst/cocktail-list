import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  match,
} from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

const AllDrinksPage: React.SFC<{ drinkStore: DrinkStore }> = ({
  drinkStore,
}) => {
  return (
    <DrinkListContainer displayFavorites={false} drinkStore={drinkStore} />
  );
};
const FavoriteDrinksPage: React.SFC<{ drinkStore: DrinkStore }> = ({
  drinkStore,
}) => {
  return <DrinkListContainer displayFavorites={true} drinkStore={drinkStore} />;
};

const Home: React.SFC<IHomeProps> = props => {
  return (
    <div className="container">
      <Navbar collapseOnSelect={true}>
        <Navbar.Header>
          <Navbar.Brand>Cocktails</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/drinks">
              <NavItem>Drinks</NavItem>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <NavItem>Favorites</NavItem>
            </LinkContainer>
            <LinkContainer to="/add">
              <NavItem>Add</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Redirect exact={true} from={props.match.url} to="/drinks" />
        <Route path={props.match.url + 'drinks'} component={AllDrinksPage} />
        {/* TODO: rewrite favorites as a higher order component or something using nested routes? */}
        <Route
          path={props.match.url + 'favorites'}
          component={FavoriteDrinksPage}
        />
        <Route path={props.match.url + 'add'} component={AddDrinkContainer} />
        <Route path={props.match.url + 'about'} component={AboutApp} />
        <Route component={NotFound} />
      </Switch>
      <DevTools />
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

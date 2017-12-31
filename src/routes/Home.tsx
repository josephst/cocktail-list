import * as React from 'react';
import { Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap';
import { Switch, Redirect, Route, match } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import DevTools from 'mobx-react-devtools';

import { AddDrink, DrinksPage, NotFound, About } from '../routes';

const Header: React.SFC = () => {
  return (
    <Navbar collapseOnSelect={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon glyph="glass" />
          Cocktails
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer exact={true} to="/drinks">
            <NavItem>Drinks</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/drinks/favorites">
            <NavItem>Favorites</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/add">
            <NavItem>Add</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

interface IHomeProps {
  match: match<{}>;
}

export const Home: React.SFC<IHomeProps> = props => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Redirect exact={true} from="/" to="/drinks" />
        {/* no "/" necessary in URL because parent component matched it already (it's part of match.url) */}
        <Route path={props.match.url + 'drinks'} component={DrinksPage} />
        <Route path={props.match.url + 'add'} component={AddDrink} />
        <Route path={props.match.url + 'about'} component={About} />
        <Route component={NotFound} />
      </Switch>
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
};

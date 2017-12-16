import * as React from 'react';

import { DrinkListContainer } from './drinklist/drinkListContainer';

import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <h2>Cocktails</h2>
        </div>
        <div>
          <DrinkListContainer />
        </div>
      </div>
    );
  }
}

export default App;

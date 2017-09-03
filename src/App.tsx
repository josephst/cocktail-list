import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import { DrinkListContainer } from './drinklist/drinkListContainer';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h2>Cocktails</h2>
          </div>
          <DrinkListContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

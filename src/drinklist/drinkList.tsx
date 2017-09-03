import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';

import { DrinkCard } from './drinkCard';
import { DrinkListShared } from './drinkListContainer';

import './drinkList.css';

interface DrinkListProps extends DrinkListShared {
  hideNetworkError: () => void;
}

class DrinkList extends React.Component<DrinkListProps, {}> {
  closeMessageBox = () => {
    this.props.hideNetworkError();
  }

  render() {
    return (
      <div>
        <div className="DrinkList">
          {this.props.drinks.map((drink, index) =>
            <div key={index}><DrinkCard drink={drink} ingredients={this.props.ingredients} /></div>)
          }
        </div>
        <Snackbar
          open={this.props.networkError.showError}
          message={this.props.networkError.message}
          autoHideDuration={3000}
          onRequestClose={this.closeMessageBox}
        />
      </div>
    );
  }
}

export { DrinkList };
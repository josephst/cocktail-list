import * as React from 'react';
import { Header, Modal } from 'semantic-ui-react';

import { DrinkCard } from './drinkCard';
import { DrinkListShared } from './drinkListContainer';

import './drinkList.css';

interface DrinkListProps extends DrinkListShared {
  clearNetworkError: () => void;
}

class DrinkList extends React.Component<DrinkListProps, {}> {
  closeMessageBox = () => {
    this.props.clearNetworkError();
  }

  render() {
    return (
      <div>
        <div className="DrinkList">
          {this.props.filteredDrinks.map((drink, index) =>
            <div key={index}><DrinkCard drink={drink} ingredients={this.props.ingredients} /></div>)
          }
        </div>
        <Modal
          open={this.props.networkError.showError}
          onClose={this.closeMessageBox}
          basic={true}
        >
          <Header icon="warning" content="Network Error" />
          <Modal.Content>
            {this.props.networkError.message}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export { DrinkList };
import * as React from 'react';
import { List, Icon } from 'semantic-ui-react';

import { Drink } from '../drink';

interface DrinkListItemProps {
  drink: Drink;
  updateSidebarView: (drink: Drink) => void;
}

export class DrinkListItem extends React.Component<DrinkListItemProps, {}> {
  handleClick = (click: React.MouseEvent<HTMLAnchorElement>) => {
    this.props.updateSidebarView(this.props.drink);
  }

  render() {
    return (
      <List.Item className="DrinkListItem" onClick={this.handleClick} as="a">
        <List.Content>
          <List.Header className="drinkName">
            <Icon name="star" />{this.props.drink.name}
          </List.Header>
          <List.Description>
            {this.props.drink.details.category}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

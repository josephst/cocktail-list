import * as React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import { Drink } from '../drink';

interface SidebarProps {
  drink: Drink;
}

export const Sidebar: React.SFC<SidebarProps> = (props) => {
  return (
    <div>
      <Header as="h2" icon={true} textAlign={'center'}>
        <Icon name="cocktail" />
        <Header.Content>{props.drink.name}</Header.Content>
      </Header>
    </div>
  );
};

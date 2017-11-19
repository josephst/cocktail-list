import * as React from 'react';
import { Button, Divider, Header, Icon, List } from 'semantic-ui-react';

import { Drink } from '../drink';

interface SidebarProps {
  drink: Drink;
  clearSelectedDrink: React.MouseEventHandler<HTMLButtonElement>;
}

export const Sidebar: React.SFC<SidebarProps> = props => {
  return (
    <div>
      {props.clearSelectedDrink && (
        <Button
          icon="close"
          floated="right"
          onClick={props.clearSelectedDrink}
        />
      )}
      <Header size={'large'} icon={true} textAlign={'center'}>
        <Icon name="cocktail" />
        <Header.Content>{props.drink.name}</Header.Content>
        <Header.Subheader>{props.drink.details.category}</Header.Subheader>
      </Header>
      <Divider horizontal={true}>Ingredients</Divider>
      <List>
        {props.drink.ingredients.map(ingredient => {
          const unit = ingredient.unit ? ingredient.unit + ' ' : '';
          const ingString = `${ingredient.quantity} ${unit}${ingredient.name}`;
          return <List.Item key={ingredient.name} content={ingString} />;
        })}
      </List>
      <Divider horizontal={true}>Steps</Divider>
      {props.drink.steps}
    </div>
  );
};

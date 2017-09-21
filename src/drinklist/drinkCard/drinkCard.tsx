import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import { Drink, Ingredient } from '../drink';

const DrinkCard: React.SFC<{ drink: Drink, ingredients: Ingredient[] }> = (props) => {
  const ingredientNames = props.drink.ingredients.map((ingredientRef) => {
    const ingredientDetail = props.ingredients.find((ingredient) => ingredient.id === ingredientRef.ref);
    return ingredientDetail ? ingredientDetail.name : '???';
  });
  return (
    <Card>
      <Card.Content>
        <Card.Header className="drinkName">
          <Icon name="star"/>{props.drink.name}
        </Card.Header>
        <Card.Meta>
          {props.drink.details.category}
        </Card.Meta>
        <Card.Description>
          {ingredientNames.join(', ')}
        </Card.Description>
      </Card.Content>

      {/* <CardHeader
          title={props.drink.name}
          subtitle={props.drink.favorite ? 'Favorite!' : ''}
          actAsExpander={true}
          showExpandableButton={true}
      />
      <CardText expandable={true}>
          <h4>Ingredients</h4>
          <List>
              {props.drink.ingredients.map((ingredient) => {
                  const ingDetail = props.ingredients.find((ing) => ing.id === ingredient.ref);
                  const text = `${ingredient.quantity} ${ingredient.unit ? ingredient.unit : ''}
                      ${ingDetail ? ingDetail.name : 'Ingredient not found in DB'}`;
                  return (
                      <ListItem key={ingredient.ref} primaryText={text} disabled={true} className="ingredient"/>
                  );
              })}
          </List>
          <h4>Steps</h4>
          <div className="steps">{props.drink.steps}</div>
      </CardText> */}
    </Card>
  );
};

export default DrinkCard;

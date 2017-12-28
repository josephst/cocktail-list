import * as React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { Drink } from '../drink';

interface ExtendedProps {
  drink: Drink;
}

const CardExpandedDetails: React.SFC<ExtendedProps> = props => {
  return (
    <div>
      <div>
        <u>Ingredients</u>
        <ListGroup>
          {props.drink.ingredients.map(ingredient => (
            <ListGroupItem key={ingredient.name}>
              {ingredient.quantity !== 0 ? ingredient.quantity : ''}{' '}
              {ingredient.unit || ''} {ingredient.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <u>Steps</u>
      <div>{props.drink.steps}</div>
    </div>
  );
};

export { CardExpandedDetails };

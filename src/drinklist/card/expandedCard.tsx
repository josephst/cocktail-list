import * as React from 'react';

import { Drink } from '../drink';

interface ExtendedProps {
  drink: Drink;
}

const ExpandedCard: React.SFC<ExtendedProps> = props => {
  return (
    <div>
      <div>
        <h3>Ingredients</h3>
        {props.drink.ingredients.map(ingredient => (
          <li>
            {ingredient.quantity !== 0 ? ingredient.quantity : ''}{' '}
            {ingredient.unit || ''} {ingredient.name}
          </li>
        ))}
      </div>
      <h3>Steps</h3>
      {props.drink.steps}
    </div>
  );
};

export { ExpandedCard };

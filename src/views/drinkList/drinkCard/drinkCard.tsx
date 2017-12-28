import * as React from 'react';

import { Drink, DrinkId } from '../../../typings/drink';

export interface DrinkCardProps {
  toggleFavorite: (drinkId: DrinkId) => void;
  handleClick: (drinkId: DrinkId) => void;
  drink: Drink;
  expandedId?: DrinkId;
}

const DrinkCard: React.SFC<DrinkCardProps> = props => {
  const drink = props.drink;
  return (
    <div>
      <button
        onClick={() => props.toggleFavorite(props.drink.id)}
        id="favoriteButton"
      >
        {props.drink.favorite ? 'Remove Fave' : 'Add Fave'}
      </button>
      <h2 onClick={() => props.handleClick(props.drink.id)}>{drink.name}</h2>
      {props.expandedId === props.drink.id && (
        // expanded
        <div onClick={() => props.handleClick(props.drink.id)}>
          <hr />
          <h3>Ingredients</h3>
          <ul>
            {drink.ingredients.map((ing, index) => (
              <li key={index}>{`${ing.quantity} ${ing.unit} ${ing.name}`}</li>
            ))}
          </ul>
          <hr />
          <h3>Steps</h3>
          {drink.steps}
          <div>Source: {drink.source}</div>
        </div>
      )}
    </div>
  );
};

export { DrinkCard };

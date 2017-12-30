import * as React from 'react';

import { Drink } from '../../../typings/drink';
import { DrinkId } from '../../../models/DrinkModel';

export interface IDrinkCardProps {
  toggleFavorite: () => void;
  handleClick: (drinkId: DrinkId) => void;
  deleteDrink: () => void;
  drink: Drink;
  expandedId?: DrinkId;
}

const DrinkCard: React.SFC<IDrinkCardProps> = props => {
  const drink = props.drink;
  const titleBar = (
    <h2 onClick={() => props.handleClick(drink.id)}>{drink.name}</h2>
  );
  if (props.expandedId === drink.id) {
    // expanded
    return (
      <div>
        {titleBar}
        <div onClick={() => props.handleClick(props.drink.id)}>
          <div>{drink.details.category}</div>
          <h3>Ingredients</h3>
          <ul>
            {drink.ingredients.map(ing => (
              <li key={ing.name}>
                {ing.quantity === 0 ? '' : ing.quantity} {ing.unit || ''}{' '}
                {ing.name}
              </li>
            ))}
          </ul>
          <hr />
          <h3>Steps</h3>
          {drink.steps}
          <div>Source: {drink.source}</div>
        </div>
        <button onClick={() => props.toggleFavorite()} id="favoriteButton">
          {drink.favorite ? 'Remove Fave' : 'Add Fave'}
        </button>
        {props.drink.default === false && (
          <button onClick={() => props.deleteDrink()} id="deleteButton">
            Delete
          </button>
        )}
      </div>
    );
  } else {
    // collapsed
    return titleBar;
  }
};

export { DrinkCard };

import * as React from 'react';

import { Drink } from '../drink';

const DrinkCard: React.SFC<{ drink: Drink }> = (props) => {
    return (
        <div>
            <div>
                <h3 className="drinkName">{props.drink.name}</h3>
                {props.drink.favorite ? 'Favorite!' : ''}
            </div>
            <div>
                <h4>Ingredients</h4>
                <ul className="ingredientList">
                    {props.drink.ingredients.map((ingredient, index) => (
                        <li className="ingredient" key={index}>
                            {ingredient.quantity} {ingredient.unit || ''} {ingredient.name}
                        </li>))
                    }
                </ul>
                <h4>Steps</h4>
                <div className="steps">{props.drink.steps}</div>
            </div>
        </div>
    );
};

export default DrinkCard;

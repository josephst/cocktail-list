import * as React from 'react';

import { Drink, Ingredient } from '../drink';

const DrinkCard: React.SFC<{ drink: Drink, ingredients: Ingredient[] }> = (props) => {
    return (
        <div>
            <div>
                <h3 className="drinkName">{props.drink.name}</h3>
                {props.drink.favorite ? 'Favorite!' : ''}
            </div>
            <div>
                <h4>Ingredients</h4>
                <ul className="ingredientList">
                    {props.drink.ingredients.map((ingredient) => {
                        const ingDetail = props.ingredients.find((ing) => ing.id === ingredient.ref);
                        return (
                            <li className="ingredient" key={ingredient.ref}>
                                {ingredient.quantity} {ingredient.unit ? `${ingredient.unit} ` : ''}
                                {ingDetail ? ingDetail.name : 'Ingredient not found in DB'}
                            </li>);
                    }
                    )}
                </ul>
                <h4>Steps</h4>
                <div className="steps">{props.drink.steps}</div>
            </div>
        </div>
    );
};

export default DrinkCard;

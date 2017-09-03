import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { Drink, Ingredient } from '../drink';

const DrinkCard: React.SFC<{ drink: Drink, ingredients: Ingredient[] }> = (props) => {
    return (
        <Card expandable={true} initiallyExpanded={false} showExpandableButton={true}>
            <CardHeader
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
            </CardText>
        </Card>
    );
};

export default DrinkCard;

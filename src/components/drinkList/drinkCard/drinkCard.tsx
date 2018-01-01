import * as React from 'react';

import { Drink } from '../../../models/drink';
import { DrinkId } from '../../../models/DrinkModel';
import {
  Collapse,
  Badge,
  Glyphicon,
  Button,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { observer } from 'mobx-react';

export interface IDrinkCardProps {
  toggleFavorite: () => void;
  handleClickForExpansion: (drinkId: DrinkId) => void;
  deleteDrink: () => void;
  drink: Drink;
  expanded: boolean;
}

const DrinkCard: React.SFC<IDrinkCardProps> = observer(
  (props: IDrinkCardProps) => {
    // loading drink
    if (!props.drink) {
      return <div>Loading...</div>;
    } else {
      // loaded drink
      let icons = [];
      if (props.drink.favorite) {
        icons.push(<Glyphicon key="fave" glyph="star" aria-label="Favorite" />);
      }
      if (props.drink.default === false) {
        icons.push(
          <Glyphicon key="user" glyph="user" aria-label="User-Added" />
        );
      }
      return (
        <li
          className="list-group-item"
          onClick={() => props.handleClickForExpansion(props.drink.id)}
        >
          <h3 className="drinkTitle">
            {props.drink.name}
            {icons.length > 0 && <Badge pullRight={true}>{icons}</Badge>}
          </h3>
          <Collapse in={props.expanded}>
            <div>
              <div>
                <div>{props.drink.details.category}</div>
                <h4>Ingredients</h4>
                <ListGroup>
                  {props.drink.ingredients.map(ing => (
                    <ListGroupItem key={ing.name}>
                      {ing.quantity === 0 ? '' : ing.quantity} {ing.unit || ''}{' '}
                      {ing.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
                <hr />
                <h4>Steps</h4>
                {props.drink.steps}
                <div>Source: {props.drink.source}</div>
              </div>
              <Button
                onClick={() => props.toggleFavorite()}
                id="favoriteButton"
              >
                {props.drink.favorite ? 'Remove Fave' : 'Add Fave'}
              </Button>
              {props.drink.default === false && (
                <Button
                  bsStyle="danger"
                  onClick={() => props.deleteDrink()}
                  id="deleteButton"
                >
                  Delete
                </Button>
              )}
            </div>
          </Collapse>
        </li>
      );
    }
  }
);

export { DrinkCard };

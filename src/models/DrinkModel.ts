import { observable } from 'mobx';
import { v1 as uuid } from 'uuid';

import { DrinkStore } from '../stores/drinkStore';

import { Drink, Ingredient } from '../typings/drink';

export type DrinkId = string; // uuid

/**
 * DrinkModel is a class which holds both information about a drink (such as title)
 * and methods for manipulating the drink within the MobX store.
 */
export class DrinkModel implements Drink {
  readonly store: DrinkStore;
  readonly id: DrinkId; // uuid, immutable

  // drink props
  @observable default: boolean;
  @observable dateCreated: string;
  @observable hidden: boolean;
  @observable favorite: boolean;
  @observable name: string;
  @observable ingredients: Ingredient[];
  @observable source: string;
  @observable
  details: {
    category: string;
    color: string;
    glassType: string;
    ice: string; // type of ice that the drink is served with (chips, single cube, rocks, etc.)
  };
  @observable steps: string;

  constructor(store: DrinkStore, id: string = uuid()) {
    this.store = store;
    this.id = id;
  }

  /**
   * Remove drink from store
   */
  delete() {
    this.store.removeDrink(this);
  }

  /**
   * Populate DrinkModel with data about a drink (not done in ctor)
   * @param drinkInfo Drink information
   */
  updateFromJson(drinkInfo: Drink) {
    // id not populated, since it is considered unique from time of creation (using id from server/ file)
    const isDefault = drinkInfo.default;
    const {
      dateCreated,
      hidden,
      favorite,
      name,
      ingredients,
      source,
      details,
      steps,
    } = drinkInfo;
    this.default = isDefault;
    this.dateCreated = dateCreated;
    this.hidden = hidden;
    this.favorite = favorite;
    this.name = name;
    this.ingredients = ingredients;
    this.source = source;
    this.details = details;
    this.steps = steps;
  }

  convertToJson(): Drink {
    return {
      id: this.id,
      default: this.default,
      dateCreated: this.dateCreated,
      details: this.details,
      favorite: this.favorite,
      hidden: this.hidden,
      ingredients: this.ingredients,
      name: this.name,
      source: this.source,
      steps: this.steps,
    };
  }
}

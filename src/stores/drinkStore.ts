import { observable, computed } from 'mobx';
import { v4 as uuid } from 'uuid';

import { makeDrink } from '../fixtures/drink';

import { DrinkModel } from '../models/DrinkModel';

class DrinkStore {
  @observable public drinks: DrinkModel[] = [];
  @observable public isLoading = false;

  constructor() {
    this.loadDrinks();
  }

  @computed
  get favoriteDrinks() {
    return this.drinks.filter(drink => drink.favorite);
  }

  createNewDrink() {
    const newDrinkModel = new DrinkModel(this); // let uuid be generated
    this.drinks.push(newDrinkModel);
    return newDrinkModel;
  }

  loadDrinks() {
    this.isLoading = true;
    // in future, this will load from server/ JSON
    for (let i = 0; i < 7; i++) {
      const drinkInfo = makeDrink();
      const drinkModel = new DrinkModel(this, uuid());
      drinkModel.updateFromJson(drinkInfo);
      if (i % 2 === 0) {
        // make some favorites
        drinkModel.favorite = true;
      }
      if (i % 3 === 0) {
        // make some appear user-added
        drinkModel.default = false;
      }
      this.drinks.push(drinkModel);
    }
    this.isLoading = false;
  }

  removeDrink(drink: DrinkModel) {
    this.drinks.splice(this.drinks.indexOf(drink), 1);
  }
}

export { DrinkStore };

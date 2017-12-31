import { observable, computed, action } from 'mobx';

import { Drink } from '../typings/drink';

import { DrinkModel } from '../models/DrinkModel';
import { INetworkInterface } from '../controllers/TransportLayer';

class DrinkStore {
  @observable public drinks: DrinkModel[] = [];
  @observable public isLoading = false;
  private transportLayer: INetworkInterface;

  constructor(transportLayer: INetworkInterface) {
    this.transportLayer = transportLayer;
    this.loadDrinks();
  }

  @computed
  get favoriteDrinks() {
    return this.drinks.filter(drink => drink.favorite);
  }

  createDrink() {
    const drink = new DrinkModel(this);
    this.drinks.push(drink);
    return drink;
  }

  @action
  loadDrinks() {
    this.isLoading = true;
    // in future, this will load from server/ JSON
    this.transportLayer.fetchDrinks().then(
      action('fetchSuccess', (drinks: Drink[]) => {
        drinks.forEach(drinkInfo => this.updateDrinkFromServer(drinkInfo));
        this.isLoading = false;
      })
    );
  }

  @action
  updateDrinkFromServer(drinkInfo: Drink) {
    let drinkModel = this.drinks.find(d => d.id === drinkInfo.id);
    if (!drinkModel) {
      drinkModel = new DrinkModel(this, drinkInfo.id);
      this.drinks.push(drinkModel);
    }
    drinkModel.updateFromJson(drinkInfo);
  }

  removeDrink(drink: DrinkModel) {
    this.drinks.splice(this.drinks.indexOf(drink), 1);
  }
}

export { DrinkStore };

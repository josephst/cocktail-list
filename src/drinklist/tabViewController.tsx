import * as React from 'react';

import { TabView } from './tabView';
import { Drink } from './drink';

export enum DrinkCategoryCode {
  All,
  Favorites,
}

export interface DrinkCategory {
  name: string;
  code: DrinkCategoryCode;
}

const categories: DrinkCategory[] = [
  {
    name: 'All',
    code: DrinkCategoryCode.All,
  },
  {
    name: 'Favorites',
    code: DrinkCategoryCode.Favorites,
  },
];

interface TabViewProps {
  drinks: Drink[];
}

interface TabViewState {
  drinks: Drink[];
}

class TabViewController extends React.Component<TabViewProps, TabViewState> {
  static getFavoriteDrinks: (drinks: Drink[]) => Drink[] = drinks => {
    return drinks.filter(drink => drink.favorite);
  };

  constructor(props: TabViewProps) {
    super(props);
    this.state = {
      drinks: this.props.drinks,
    };
  }

  render() {
    const favoriteDrinks = TabViewController.getFavoriteDrinks(
      this.state.drinks
    );
    const drinksWithCategories = categories.map(category => {
      if (category.code === DrinkCategoryCode.Favorites) {
        return {
          category,
          drinks: favoriteDrinks,
        };
      } else {
        return {
          category,
          drinks: this.state.drinks,
        };
      }
    });
    return <TabView categories={drinksWithCategories} />;
  }
}

export { TabViewController };

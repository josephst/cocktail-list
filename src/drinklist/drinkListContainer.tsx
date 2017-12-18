import * as React from 'react';

import { DrinkList } from './drinkList';
import { CategorySwitcher } from './categorySwitcher';
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

export interface DrinkListState {
  drinks: Drink[];
  loading: boolean;
  drinksInCategory: Drink[];
  selectedCategory: DrinkCategoryCode;
}

class DrinkListContainer extends React.Component<{}, DrinkListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      drinks: [],
      loading: true,
      drinksInCategory: [],
      selectedCategory: DrinkCategoryCode.All,
    };
    this.navigateToCategory = this.navigateToCategory.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/db.json`)
      .then(res => res.json())
      .then((res: { drinks: Drink[] }) =>
        this.setState({
          drinks: res.drinks,
          drinksInCategory: res.drinks,
          loading: false,
        })
      );
  }

  navigateToCategory(category: DrinkCategory) {
    switch (category.code) {
      case DrinkCategoryCode.Favorites: {
        this.setState({
          drinksInCategory: this.state.drinks.filter(drink => drink.favorite),
          selectedCategory: category.code,
        });
        break;
      }
      default: {
        this.setState({
          drinksInCategory: this.state.drinks,
          selectedCategory: DrinkCategoryCode.All,
        });
        break;
      }
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <DrinkList drinks={this.state.drinksInCategory} />
          <CategorySwitcher
            navigateToCategory={this.navigateToCategory}
            selectedCategory={this.state.selectedCategory}
            categories={categories}
          />
        </div>
      );
    }
  }
}

export { DrinkListContainer };

import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { DrinkCategory, DrinkCategoryCode } from './drinkListContainer';

interface CategorySwitchterProps {
  navigateToCategory: (category: DrinkCategory) => void;
  selectedCategory: DrinkCategoryCode;
  categories: DrinkCategory[];
}

interface CategoryButtonProps extends CategorySwitchterProps {
  category: DrinkCategory;
  isSelected: boolean;
}

const CategoryButton: React.SFC<CategoryButtonProps> = props => {
  const handleClick = () => props.navigateToCategory(props.category);
  return <button onClick={handleClick}>{props.category.name}</button>;
};

const CategorySwitcher: React.SFC<CategorySwitchterProps> = props => {
  return (
    <Navbar fixedBottom={true}>
      <Nav>
        {props.categories.map(category => {
          const isSelected = props.selectedCategory === category.code;
          return (
            <CategoryButton
              key={category.code}
              {...{ category, isSelected, ...props }}
            />
          );
        })}
      </Nav>
    </Navbar>
  );
};

export { CategorySwitcher };

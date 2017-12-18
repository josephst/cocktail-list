import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { Drink } from './drink';
import { DrinkList } from './drinkList';
import { DrinkCategory, DrinkCategoryCode } from './tabViewController';

interface TabBarProps {
  categories: {
    category: DrinkCategory;
    drinks: Drink[];
  }[];
}

class TabView extends React.Component<TabBarProps> {
  constructor(props: TabBarProps) {
    super(props);
  }

  render() {
    return (
      <Tabs
        defaultActiveKey={DrinkCategoryCode.All}
        id="favorite-all-drinks-tabs"
      >
        {this.props.categories.map((category, index) => (
          <Tab
            key={category.category.code}
            title={category.category.name}
            eventKey={category.category.code}
          >
            <DrinkList drinks={category.drinks} />
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export { TabView };

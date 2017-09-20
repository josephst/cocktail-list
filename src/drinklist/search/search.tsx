import * as React from 'react';
import { AutoComplete } from 'material-ui';

export interface SearchProps {
  drinkNames: string[];
  updateSearchTerm: (term: string) => void;
}

export class AutoCompleteDrinkSearch extends React.Component<SearchProps, {}> {
  constructor() {
    super();
  }
  render() {
    return (
      <AutoComplete
        hintText="Drink search"
        dataSource={this.props.drinkNames}
        onUpdateInput={this.props.updateSearchTerm}
        filter={AutoComplete.fuzzyFilter}
        maxSearchResults={5}
      />
    );
  }
}
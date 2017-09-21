import * as React from 'react';
import { TextField } from 'material-ui';

export interface SearchProps {
  updateSearchTerm: (term: string) => void;
}

export class DrinkFilter extends React.Component<SearchProps, {}> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const term = target.value || '';
    this.props.updateSearchTerm(term.toLowerCase());
  }

  render() {
    return (
      <TextField
        hintText="Drink search"
        onChange={this.handleChange}
      />
    );
  }
}
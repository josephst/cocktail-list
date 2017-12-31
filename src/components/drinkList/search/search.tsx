import * as React from 'react';
import * as escapeStringRegexp from 'escape-string-regexp';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

interface ISearchForDrinkProps {
  searchForDrink: (term: string) => void;
}

interface ISearchForDrinkState {
  term: string;
}

class SearchForDrink extends React.Component<
  ISearchForDrinkProps,
  ISearchForDrinkState
> {
  constructor(props: ISearchForDrinkProps) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<FormControl>) {
    event.preventDefault();
    const term = (event.target as HTMLInputElement).value;
    this.setState({ term });
    this.props.searchForDrink(escapeStringRegexp(term));
  }

  render() {
    return (
      <Form inline={true}>
        <FormGroup controlId="search" bsSize="small">
          <ControlLabel>Search</ControlLabel>{' '}
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

export { SearchForDrink };

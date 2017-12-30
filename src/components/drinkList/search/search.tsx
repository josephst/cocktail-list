import * as React from 'react';
import * as escapeStringRegexp from 'escape-string-regexp';

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

  handleChange(input: string) {
    // TODO: debounce?
    this.setState({ term: input });
    this.props.searchForDrink(escapeStringRegexp(input));
  }

  render() {
    return (
      <div>
        <label>
          Search:
          <input
            type="text"
            value={this.state.term}
            onChange={event => this.handleChange(event.target.value)}
          />
        </label>
      </div>
    );
  }
}

export { SearchForDrink };

import * as React from 'react';
import { match } from 'react-router';

import { AddDrinkContainer } from '../../components/add';

export const AddDrink: React.SFC<{ match: match<{}> }> = props => {
  return <AddDrinkContainer />;
};

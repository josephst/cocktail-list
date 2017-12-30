import * as React from 'react';

class NotFound extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Not Found</div>;
  }
}

export { NotFound };

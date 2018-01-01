import * as React from 'react';
import { PageHeader, Well } from 'react-bootstrap';

class AboutApp extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PageHeader>About</PageHeader>
        <p className="lead">
          App by <a href="https://josephstahl.com">Joseph Stahl</a>
        </p>
        <div id="thanks">
          <h3>Thanks to:</h3>
          <small>Very much a work in progress</small>
          <ul>
            <li>
              <a href="http://glyphicons.com/">glyphicons</a>: Icons
            </li>
            <li>
              <a href="https://app.netlify.com/">Netlify</a>: Hosting
            </li>
          </ul>
        </div>
        <Well id="copyright" bsSize="small">
          <p>Copyright 2017 Joseph Stahl</p>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions: The above copyright notice and
            this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Well>
      </div>
    );
  }
}

export { AboutApp };

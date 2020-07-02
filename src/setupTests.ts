import * as raf from 'raf';
// https://github.com/facebook/jest/issues/4545#issuecomment-332762365
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-334801311
// tslint:disable-next-line:no-any
(raf as any).polyfill();

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

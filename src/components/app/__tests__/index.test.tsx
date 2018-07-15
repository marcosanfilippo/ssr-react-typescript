// tslint:disable:no-implicit-dependencies
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../App';

describe('App component', () => {
  it('renders correctly with a title', () => {
    const dummyTitle = 'dummy title';
    const tree = renderer.create(<App title={dummyTitle} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// take a look here for dynamic matching: 
// https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/link.react.test.js

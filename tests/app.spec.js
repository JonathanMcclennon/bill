import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.js';

describe('App', () => {
  it('should render loading view when isBillReady is false', () => {
    const app = shallow(<App />);
    expect(app.text()).toEqual('Loading');
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.js';

describe('Setup Test', () => {
  it('should equat true', () => {
    const app = shallow(<App />);
    expect(app.text()).toEqual('This is the app');
  });
});

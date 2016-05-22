import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../src/components/title/title.react.js';
import Styles from '../../src/components/title/title.css';

describe('.title', () => {
  it('should render the correct due date html', () => {
      let period = {
          from: 1,
          to: 2
      };
      const title = shallow(<Title due='due' generated='generated' period={period} />);
      expect(title.find('dl').at(0).html()).toEqual(`<dl><dt class="${Styles.subtitle}">Date due:</dt><dd class="${Styles.item}">due</dd></dl>`);
  });

  it('should render the correct generated date html', () => {
      let period = {
          from: 1,
          to: 2
      };
      const title = shallow(<Title due='due' generated='generated' period={period} />);
      expect(title.find('dl').at(1).html()).toEqual(`<dl><dt class="${Styles.subtitle}">Date generated:</dt><dd class="${Styles.item}">generated</dd></dl>`);
  });

  it('should render the correct period html', () => {
      let period = {
          from: 1,
          to: 2
      };
      const title = shallow(<Title due='due' generated='generated' period={period} />);
      expect(title.find('dl').at(2).html()).toEqual(`<dl><dt class="${Styles.subtitle}">Period:</dt><dd class="${Styles.item}">1 - 2</dd></dl>`);
  });
});

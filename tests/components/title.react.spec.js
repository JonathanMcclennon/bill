import React from 'react';
import { render } from 'enzyme';
import Title from '../../src/components/title.react.js';

describe('.title', () => {
  it('should render the correct html', () => {
      let period = {
          from: 1,
          to: 2
      };
      let result = '<div><h1>Bill</h1><span>due</span><span>generated</span><span>From - 1</span><span>End - 2</span></div>';
      const title = render(<Title due='due' generated='generated' period={period} />);
      expect(title.html()).toEqual(result);
  });
});

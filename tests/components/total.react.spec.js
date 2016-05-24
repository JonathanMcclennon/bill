import React from 'react';
import { render } from 'enzyme';
import Total from '../../src/components/total/total.react.js';

describe('.total', () => {
    it('should render the correct html', () => {
      let result = 'Total: £132.55';
      const total = render(<Total total={132.55} />);
      expect(total.find('div').text()).toEqual(result);
    });
});

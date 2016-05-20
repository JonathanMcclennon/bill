import React from 'react';
import { render } from 'enzyme';
import Total from '../../src/components/total.react.js';

describe('.total', () => {
    it('should render the correct html', () => {
      let result = '<div>£132.55</div>';
      const total = render(<Total total='132.55' />);
      expect(total.html()).toEqual(result);
    });
});

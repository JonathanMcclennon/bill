import React from 'react';
import { shallow } from 'enzyme';
import Calls from '../../src/components/calls/calls.react.js';
import Styles from '../../src/components/calls/calls.css';

describe('.calls', () => {

    let callData, callTotal;

    beforeEach(() => {
        callData = [{
            called: '123123123',
            duration: '00:12:00',
            cost: 1.2
        },{
            called: '321321321',
            duration: '00:43:00',
            cost: 5
        },{
            type: '543344343',
            duration: '00:21:23',
            cost: 16.4
        }];

        callTotal = 20.32;
    });

    it('should render three item views', () => {
      const subscriptions = shallow(<Calls calls={callData} currency='$' callTotal={callTotal}/>);
      expect(subscriptions.find('tbody tr').length).toEqual(3);
    });

    it('should render the correct information in the item view', () => {
      const subscriptions = shallow(<Calls calls={callData} currency='$' callTotal={callTotal}/>);
      expect(subscriptions.find('tbody tr').at(0).html()).toEqual(`<tr><td>123123123</td><td>00:12:00</td><td class="${Styles.bodyCost}">$1.2</td></tr>`);
    });

    it('should render the call total', () => {
        const subscriptions = shallow(<Calls calls={callData} currency='$' callTotal={callTotal}/>);
        expect(subscriptions.find('tfoot').html()).toEqual(`<tfoot><tr class="${Styles.total}"><th class="${Styles.totalTitle}">Total</th><th class="${Styles.totalValue}" colspan="2">$20.32</th></tr></tfoot>`);
    });
});

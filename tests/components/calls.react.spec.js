import React from 'react';
import { shallow } from 'enzyme';
import Calls from '../../src/components/calls.react.js';

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
      expect(subscriptions.find('li').length).toEqual(3);
    });

    it('should render the correct information in the item view', () => {
      const subscriptions = shallow(<Calls calls={callData} currency='$' callTotal={callTotal}/>);
      expect(subscriptions.find('li').at(0).html()).toEqual('<li><span>123123123</span><span>00:12:00</span><span>$1.2</span></li>');
    });

    it('should render the call total', () => {
        const subscriptions = shallow(<Calls calls={callData} currency='$' callTotal={callTotal}/>);
        expect(subscriptions.find('div').at(0).text()).toEqual('$20.32');
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Subscriptions from '../../src/components/subscriptions.react.js';

describe('.subscriptions', () => {

    let subscriptions = [{
        type: "tv",
        name: "Movies",
        cost: 50
    },{
        type: "talk",
        name: "Talk",
        cost: 5
    },{
        type: "broadband",
        name: "Internet",
        cost: 16.4
    }]

    it('should render three item views', () => {
      const subscriptions = shallow(<Subscriptions data={subscriptions} currency='$'/>);
      expect(subscriptions.find('li').length).toEqual(3);
    });

    it('should render the correct information in the item view', () => {
      const subscriptions = shallow(<Subscriptions data={subscriptions} currency='$'/>);
      expect(subscriptions.find('li').at(0).html()).toEqual('<span>tv</span><span>Movies</span><span>$50</span>');
    });
});

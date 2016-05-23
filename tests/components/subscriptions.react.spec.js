import React from 'react';
import { shallow } from 'enzyme';
import Subscriptions from '../../src/components/subscriptions/subscriptions.react.js';
import Styles from '../../src/components/subscriptions/subscriptions.css';

describe('.subscriptions', () => {

    let subscriptionsData;

    beforeEach(() => {
        subscriptionsData = [{
            type: 'tv',
            name: 'Movies',
            cost: 50
        },{
            type: 'talk',
            name: 'Talk',
            cost: 5
        },{
            type: 'broadband',
            name: 'Internet',
            cost: 16.4
        }]
    });

    it('should render three item views', () => {
      const subscriptions = shallow(<Subscriptions subscriptions={subscriptionsData} currency='$'/>);
      expect(subscriptions.find(`.${Styles.item}`).length).toEqual(3);
    });

    it('should render the correct information in the item view', () => {
      const subscriptions = shallow(<Subscriptions subscriptions={subscriptionsData} currency='$'/>);
      expect(subscriptions.find('dl').at(0).html()).toEqual(`<dl class="${Styles.item}"><dt class="${Styles.itemTitle}">Name</dt><dd class="${Styles.itemName}">Movies</dd><dt class="${Styles.itemTitle}">Price</dt><dd class="${Styles.itemName}">$50</dd></dl>`);
    });
});

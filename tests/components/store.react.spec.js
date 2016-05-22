import React from 'react';
import { shallow } from 'enzyme';
import Store from '../../src/components/store.react.js';

describe('.store', () => {
    describe('.render', () => {
        let store, rentals, bought, total;
        beforeEach(() => {
            rentals = [{
                title: 'rental title one',
                cost: 3.00
            }, {
                title: 'rental title two',
                cost: 2.00
            }];

            bought = [{
                title: 'bought title one',
                cost: 12.33
            }, {
                title: 'bought title two',
                cost: 16.32
            }];

            total = 12.32
            store = shallow(<Store rentals={rentals} bought={bought} storeTotal={total} currency='£'/>);
        });

        it('should render the rental elements', () => {
            expect(store.find('.store__rentals li').length).toEqual(2);
            expect(store.find('.store__rentals li').at(0).html()).toEqual('<li><span>rental title one</span><span>£3</span></li>');
        });

        it('should render the bought elements', () => {
            expect(store.find('.store__bought li').length).toEqual(2);
            expect(store.find('.store__bought li').at(0).html()).toEqual('<li><span>bought title one</span><span>£12.33</span></li>');
        });

        it('should render the store total', () => {
            expect(store.find('.store__total').text()).toEqual('£12.32');
        });
    });
});

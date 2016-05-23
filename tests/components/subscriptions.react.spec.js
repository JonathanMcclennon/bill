import React from 'react';
import { shallow } from 'enzyme';
import Subscriptions from '../../src/components/subscriptions/subscriptions.react.js';
import Styles from '../../src/components/subscriptions/subscriptions.css';

describe('.subscriptions', () => {

    let subscriptionsData, subscriptions;

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
        }];

        subscriptions = shallow(<Subscriptions subscriptions={subscriptionsData} />);
    });

    describe('when state `hidden` is set to true', () => {
        it('should render the basic subscription view', () => {
            expect(subscriptions.find(`.${Styles.title}`).html()).toEqual(`<h2 class="${Styles.title}">Subscriptions</h2>`);
        });
    });

    describe('when state `hidden` is set to false', () => {

        beforeEach(() => {
            subscriptions.setState({
                hidden: false
            });
        });

        it('should render three item views', () => {
          expect(subscriptions.find(`.${Styles.item}`).length).toEqual(3);
        });

        it('should render the correct information in the item view', () => {
          expect(subscriptions.find('dl').at(0).html()).toEqual(`<dl class="${Styles.item}"><dt class="${Styles.itemTitle}">Name</dt><dd class="${Styles.itemName}">Movies</dd><dt class="${Styles.itemTitle}">Price</dt><dd class="${Styles.itemName}">£50</dd></dl>`);
        });
    });
});

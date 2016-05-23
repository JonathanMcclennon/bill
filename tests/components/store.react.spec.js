import React from 'react';
import { shallow } from 'enzyme';
import Store from '../../src/components/store/store.react.js';
import Styles from '../../src/components/store/store.css';

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
            store = shallow(<Store rentals={rentals} bought={bought} total={total} currency='£'/>);
        });

        describe('when state `hidden` is true', () => {
            it('should render the basic information', () => {
                expect(store.find(`.${Styles.title}`).html()).toEqual(`<h2 class="${Styles.title}">Store</h2>`);
            })
        });

        describe('when state `hidden` is false', () => {

            beforeEach(() => {
                store.setState({
                    hidden: false
                });
            });

            it('should render the rented elements', () => {
                expect(store.find(`.${Styles.rentalItem}`).at(0).html()).toEqual(`<dl class="${Styles.rentalItem}"><dt class="${Styles.rentalItemTitle}">Name</dt><dd class="${Styles.rentalItemName}">rental title one</dd><dt class="${Styles.rentalItemTitle}">Price</dt><dd class="${Styles.rentalItemName}">£3<span>(Rent)</span></dd></dl>`);
            });

            it('should render the bought elements', () => {
                expect(store.find(`.${Styles.boughtItem}`).at(1).html()).toEqual(`<dl class="${Styles.boughtItem}"><dt class="${Styles.boughtItemTitle}">Name</dt><dd class="${Styles.boughtItemName}">bought title two</dd><dt class="${Styles.boughtItemTitle}">Price</dt><dd class="${Styles.boughtItemName}">£16.32<span>(Buy)</span></dd></dl>`);
            });

            it('should render the store total', () => {
                expect(store.find(`.${Styles.total}`).html()).toEqual(`<dl class="${Styles.total}"><dt class="${Styles.totalTitle}">Store Total</dt><dd class="${Styles.totalPrice}">£12.32</dd></dl>`);
            });
        });
    });
});

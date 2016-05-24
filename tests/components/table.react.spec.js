import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/components/table/table.react.js';
import Styles from '../../src/components/table/table.css';

describe('.table', () => {

    let config, data, formatSpy, table, total;

    beforeEach(() => {
        formatSpy = jasmine.createSpy().and.returnValue('foo');

        config = [{
            heading: 'Number',
            value: 'called'
        }, {
            heading: 'Duration',
            value: 'duration'
        }, {
            heading: 'Price',
            value: 'cost',
            classType: 'price',
            format: formatSpy
        }]

        data = [{
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

        total = 123.4;


        table = shallow(<Table title='Title' tableConfig={config} data={data} total={total} />)
    });

    describe('when state `hidden` is set to true', () => {
        it('should return just the heading', () => {
            expect(table.html()).toEqual(`<section class="${Styles.root}"><h2 class="${Styles.title}"><label>[<span class="${Styles.headingIcon}">+</span>] Title</label><label class="${Styles.headingPrice}">£123.40</label></h2></section>`)
        });
    });

    describe('when state `hidden` is set to false', () => {

        beforeEach(() => {
            table.setState({
                hidden: false
            });
        })

        it('should return the correct table headings', () => {
            expect(table.find(`.${Styles.tableHeading}`).html()).toEqual(`<thead class="${Styles.tableHeading}"><tr><th>Number</th><th>Duration</th><th>Price</th></tr></thead>`);
        });

        it('should return the correct table body', () => {
            expect(table.find(`.${Styles.tableBody} tr`).at(0).html()).toEqual(`<tr class="${Styles.tableRow}"><td>123123123</td><td>00:12:00</td><td>foo</td></tr>`);
        });

        it('should should call the format function if passed', () => {
            expect(table.find(`.${Styles.tableBody} tr td`).at(2).text()).not.toEqual('1.2');
            expect(table.find(`.${Styles.tableBody} tr td`).at(2).text()).toEqual('foo');
        });
    });
});

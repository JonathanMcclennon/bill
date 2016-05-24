import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/components/table/table.react.js';
import Styles from '../../src/components/table/table.css';

describe('.table', () => {

    let config, data, formatSpy, table, total;

    beforeEach(() => {
        formatSpy = jasmine.createSpy();

        config = [{
            heading: 'Number',
            value: 'called'
        }, {
            heading: 'Duration',
            value: 'duration'
        }, {
            heading: 'Price',
            value: 'cost',
            classType: 'price'
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
            expect(table.html()).toEqual(`<section class="${Styles.root}"><h2 class="${Styles.title}"><label>+ Title</label><label class="${Styles.price}">£123.40</label></h2></section>`)
        });
    });

    describe('when state `hidden` is set to false', () => {

        beforeEach(() => {

        })

        it('should return the correct table headings', () => {

        });

        it('should return the correct table body', () => {

        });

        it('should should call the format function if passed', () => {

        });
    });

    //
    // let callData, callTotal, calls;
    //
    // beforeEach(() => {
    //
    //
    //     callTotal = 20.32;
    //     calls = shallow(<Calls calls={callData} callTotal={callTotal}/>);
    // });
    //
    // describe('when state `hidden` is set to true', () => {
    //     it('should render the basic information', () => {
    //         expect(calls.find(`.${Styles.title}`).html()).toEqual(`<h2 class="${Styles.title}">Calls</h2>`)
    //     });
    // });
    //
    // describe('when state `hidden` is set to false', () => {
    //     beforeEach(() => {
    //         calls.setState({
    //             hidden: false
    //         });
    //     });
    //
    //     it('should render three item views', () => {
    //       expect(calls.find('tbody tr').length).toEqual(3);
    //     });
    //
    //     it('should render the correct information in the item view', () => {
    //       expect(calls.find('tbody tr').at(0).html()).toEqual(`<tr><td>123123123</td><td>00:12:00</td><td class="${Styles.bodyCost}">£1.2</td></tr>`);
    //     });
    //
    //     it('should render the call total', () => {
    //         expect(calls.find('tfoot').html()).toEqual(`<tfoot><tr class="${Styles.tableTotal}"><th class="${Styles.tableTotalTitle}">Calls Total</th><th class="${Styles.tableTotalValue}" colspan="2">£20.32</th></tr></tfoot>`);
    //     });
    // });
});

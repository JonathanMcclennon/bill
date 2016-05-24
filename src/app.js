import React from 'react';
import ReactDOM from 'react-dom';
import settings from './settings';
import BillStore from './stores/BillStore';
import Title from './components/title/title.react';
import Total from './components/total/total.react';
import Table from './components/table/table.react';
import currency from './utils/currency';

const initialState = {
    isBillReady: BillStore.isBillReady()
}

const _callsConfig = [{
    heading: 'Number',
    value: 'called'
}, {
    heading: 'Duration',
    value: 'duration'
}, {
    heading: 'Cost',
    value: 'cost',
    format: currency.getFormattedCurrency,
    className: 'price'
}];

const _subscriptionConfig = [{
    heading: 'Name',
    value: 'name'
}, {
    heading: 'Price',
    value: 'cost',
    format: currency.getFormattedCurrency,
    className: 'price'
}]

const _storeConfig = [{
    heading: 'Title',
    value: 'title'
}, {
    heading: 'Purchase Type',
    value: 'type'
}, {
    heading: 'Price',
    value: 'cost',
    format: currency.getFormattedCurrency,
    className: 'price'
}]

class App extends React.Component {

    constructor() {
        super();
        this.state = initialState;
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        BillStore.addChangeListener(this._onChange);
    }

    componentWillUnMount() {
        BillStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            timings: BillStore.getStatementTimings(),
            isBillReady: BillStore.isBillReady(),
            total: BillStore.getStatementTotal(),
            subscriptions: BillStore.getSubscriptions(),
            subscriptionTotal: BillStore.getSubscriptionTotal(),
            calls: BillStore.getCallCharges(),
            callTotal: BillStore.getCallTotal(),
            storeData: BillStore.getAllStoreData(),
            storeTotal: BillStore.getStoreTotal()
        });
    }

    render() {
        if (!this.state.isBillReady) {
            return <div>Loading</div>
        }
        return <main>
            <Title due={this.state.timings.due} generated={this.state.timings.generated} period={this.state.timings.period} />
            <Table title='Subscriptions' tableConfig={_subscriptionConfig} data={this.state.subscriptions} total={this.state.subscriptionTotal} />
            <Table title='Store' tableConfig={_storeConfig} data={this.state.storeData} total={this.state.storeTotal} />
            <Table title='Calls' tableConfig={_callsConfig} data={this.state.calls} total={this.state.callTotal} />
            <Total total={this.state.total} />
        </main>;
    }
}

module.exports = App;

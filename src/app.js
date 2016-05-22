import React from 'react';
import ReactDOM from 'react-dom';
import settings from './settings';
import BillStore from './stores/BillStore';
import Title from './components/title.react';
import Total from './components/total.react';
import Subscriptions from './components/subscriptions.react';
import Calls from './components/calls.react';
import Store from './components/store.react';

const initialState = {
    isBillReady: BillStore.isBillReady()
}

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
            calls: BillStore.getCallCharges(),
            callTotal: BillStore.getCallTotal(),
            rentals: BillStore.getRentals(),
            bought: BillStore.getBuyAndKeep(),
            storeTotal: BillStore.getStoreTotal()
        });
    }

    render() {
        if (!this.state.isBillReady) {
            return <div>Loading</div>
        }
        return <div>
            <Title due={this.state.timings.due} generated={this.state.timings.generated} period={this.state.timings.period} />
            <Total currency={settings.currency} total={this.state.total} />
            <Subscriptions currency={settings.currency} subscriptions={this.state.subscriptions} />
            <Calls calls={this.state.calls} callTotal={this.state.callTotal} currency={settings.currency} />
            <Store rentals={this.state.rentals} bought={this.state.bought} storeTotal={this.state.storeTotal} currency={settings.currency} />
        </div>;
    }
}

module.exports = App;

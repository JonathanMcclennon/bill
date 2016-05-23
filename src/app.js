import React from 'react';
import ReactDOM from 'react-dom';
import settings from './settings';
import BillStore from './stores/BillStore';
import Title from './components/title/title.react';
import Total from './components/total/total.react';
import Subscriptions from './components/subscriptions/subscriptions.react';
import Calls from './components/calls/calls.react';
import Store from './components/store/store.react';

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
            subscriptionTotal: BillStore.getSubscriptionTotal(),
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
        return <main>
            <Title due={this.state.timings.due} generated={this.state.timings.generated} period={this.state.timings.period} />
            <Subscriptions subscriptions={this.state.subscriptions} total={this.state.subscriptionTotal} />
            <Store rentals={this.state.rentals} bought={this.state.bought} total={this.state.storeTotal} currency={settings.currency} />
            <Calls calls={this.state.calls} callTotal={this.state.callTotal} />
            <Total currency={settings.currency} total={this.state.total} />
        </main>;
    }
}

module.exports = App;

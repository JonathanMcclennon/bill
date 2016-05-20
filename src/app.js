import React from 'react';
import ReactDOM from 'react-dom';
import settings from './settings';
import BillStore from './stores/BillStore';
import Title from './components/title.react';
import Total from './components/total.react';
import Subscriptions from './components/subscriptions.react';

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
            subscriptions: BillStore.getSubscriptions()
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
        </div>;
    }
}

module.exports = App;

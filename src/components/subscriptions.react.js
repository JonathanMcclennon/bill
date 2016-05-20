import React from 'react';

class Subscriptions extends React.Component {
    /**
     * @return {String} Formatted currency value
     */
    getFormattedCurrency(value) {
        return this.props.currency + String(value);
    }

    render() {
        let that = this;
        let subscriptions = this.props.subscriptions.map((subscription, key) => {
            return <li key={key}><span>{subscription.type}</span><span>{subscription.name}</span><span>{that.getFormattedCurrency(subscription.cost)}</span></li>;
        });

        return <ul>{subscriptions}</ul>
    }
}

module.exports = Subscriptions;

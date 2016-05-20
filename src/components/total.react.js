import React from 'react';

class Total extends React.Component {

    getFormattedCurrency() {
        return this.props.currency + this.props.total;
    }

    render() {
        return <div>{this.getFormattedCurrency()}</div>
    }
}

module.exports = Total;

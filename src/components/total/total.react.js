import React from 'react';
import Styles from './total.css';

class Total extends React.Component {

    getFormattedCurrency() {
        return this.props.currency + this.props.total;
    }

    render() {
        return <div className={Styles.root}>Total: {this.getFormattedCurrency()}</div>
    }
}

module.exports = Total;

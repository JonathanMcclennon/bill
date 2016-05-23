import React from 'react';
import Styles from './calls.css';

class Calls extends React.Component {
    /**
     * @return {String} Formatted currency value
     */
    getFormattedCurrency(value) {
        return this.props.currency + String(value);
    }

    render() {
        let that = this;
        let calls = this.props.calls.map((call, key) => {
            return <tr key={key}><td>{call.called}</td><td>{call.duration}</td><td className={Styles.bodyCost}>{that.getFormattedCurrency(call.cost)}</td></tr>;
        });

        return <section className={Styles.root}>
            <h2 className={Styles.title}>Calls</h2>
            <table className={Styles.table}>
                <thead className={Styles.heading}>
                    <tr>
                        <th>Number</th>
                        <th>Duration</th>
                        <th className={Styles.headingCost}>Cost</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className={Styles.total}>
                        <th className={Styles.totalTitle}>Calls Total</th>
                        <th className={Styles.totalValue} colSpan='2'>{this.getFormattedCurrency(this.props.callTotal)}</th>
                    </tr>
                </tfoot>
                <tbody>{calls}</tbody>
            </table>
        </section>
    }
}

module.exports = Calls;

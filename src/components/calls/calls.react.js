import React from 'react';
import Styles from './calls.css';
import currency from '../../utils/currency';

let initialState = {
    hidden: true
}


class Calls extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this._onHeadingClick = this._onHeadingClick.bind(this);
    }

    _onHeadingClick() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        if (this.state.hidden) {
            return <section className={Styles.root}>
                <h2 onClick={this._onHeadingClick} className={Styles.title}>Calls</h2>
                <dl className={Styles.total}>
                    <dt className={Styles.totalTitle}>Call Total</dt>
                    <dd className={Styles.totalPrice}>{currency.getFormattedCurrency(this.props.callTotal)}</dd>
                </dl>
            </section>
        }

        let calls = this.props.calls.map((call, key) => {
            return <tr key={key}>
                <td>{call.called}</td>
                <td>{call.duration}</td>
                <td className={Styles.bodyCost}>{currency.getFormattedCurrency(call.cost)}</td>
            </tr>;
        });

        return <section className={Styles.root}>
            <h2 onClick={this._onHeadingClick} className={Styles.title}>Calls</h2>
            <table className={Styles.table}>
                <thead className={Styles.heading}>
                    <tr>
                        <th>Number</th>
                        <th>Duration</th>
                        <th className={Styles.headingCost}>Cost</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className={Styles.tableTotal}>
                        <th className={Styles.tableTotalTitle}>Calls Total</th>
                        <th className={Styles.tableTotalValue} colSpan='2'>{currency.getFormattedCurrency(this.props.callTotal)}</th>
                    </tr>
                </tfoot>
                <tbody>{calls}</tbody>
            </table>
        </section>
    }
}

module.exports = Calls;

import React from 'react';
import Styles from './subscriptions.css';

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
            return <li key={key}>
                <dl className={Styles.item}>
                    <dt className={Styles.itemTitle}>Name</dt><dd className={Styles.itemName}>{subscription.name}</dd>
                    <dt className={Styles.itemTitle}>Price</dt><dd className={Styles.itemName}>{that.getFormattedCurrency(subscription.cost)}</dd>
                </dl>
            </li>;
        });

        return <section className={Styles.root}>
                <h2 className={Styles.title}>Subscriptions</h2>
                <ul>{subscriptions}</ul>
                <dl className={Styles.total}>
                    <dt className={Styles.totalTitle}>Total</dt>
                    <dd className={Styles.totalPrice}>{this.getFormattedCurrency(this.props.total)}</dd>
                </dl>
            </section>
    }
}

module.exports = Subscriptions;

import React from 'react';
import currency from '../../utils/currency';
import Styles from './subscriptions.css';

const initialState = {
    hidden: true
}

class Subscriptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this._onHeadingClick = this._onHeadingClick.bind(this);
    }

    getSubscriptionElement() {
        return this.props.subscriptions.map((subscription, key) => {
            return <dl className={Styles.item} key={key}>
                    <dt className={Styles.itemTitle}>Name</dt><dd className={Styles.itemName}>{subscription.name}</dd>
                    <dt className={Styles.itemTitle}>Price</dt><dd className={Styles.itemName}>{currency.getFormattedCurrency(subscription.cost)}</dd>
                </dl>;
        });
    }

    getTotalElement() {
        return <dl className={Styles.total}>
            <dt className={Styles.totalTitle}>Subscription Total</dt>
            <dd className={Styles.totalPrice}>{currency.getFormattedCurrency(this.props.total)}</dd>
        </dl>;
    }

    _onHeadingClick() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        let subscriptions,
            total = this.getTotalElement();

        if (this.state.hidden) {
            return <section className={Styles.root}>
                <h2 onClick={this._onHeadingClick} className={Styles.title}>Subscriptions</h2>
                {total}
            </section>
        }

        subscriptions = this.getSubscriptionElement();

        return <section className={Styles.root}>
                <h2 onClick={this._onHeadingClick} className={Styles.title}>Subscriptions</h2>
                {subscriptions}
                {total}
            </section>
    }
}

module.exports = Subscriptions;

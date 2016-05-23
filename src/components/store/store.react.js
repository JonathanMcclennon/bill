import React from 'react';
import Styles from './store.css';

class Store extends React.Component {

    getFormattedCurrency(value) {
        return this.props.currency + value;
    }

    /**
     * @return {DOM} List of rented items
     */
    getRentalElements() {
        var that = this;
        return this.props.rentals.map((rental, key) => {
            return <dl className={Styles.rentalItem} key={key}>
                <dt className={Styles.rentalItemTitle}>Name</dt>
                <dd className={Styles.rentalItemName}>{rental.title}</dd>
                <dt className={Styles.rentalItemTitle}>Price</dt>
                <dd className={Styles.rentalItemName}>{that.getFormattedCurrency(rental.cost)}<span>(Rent)</span></dd>
            </dl>;
        });
    }

    /**
     * @return {DOM} List of bought items
     */
    getBoughtElements() {
        var that = this;
        return this.props.bought.map((item, key) => {
            return <dl className={Styles.boughtItem} key={key}>
                <dt className={Styles.boughtItemTitle}>Name</dt>
                <dd className={Styles.boughtItemName}>{item.title}</dd>
                <dt className={Styles.boughtItemTitle}>Price</dt>
                <dd className={Styles.boughtItemName}>{that.getFormattedCurrency(item.cost)}<span>(Buy)</span></dd>
            </dl>;
        });
    }

    render() {
        let rentals = this.getRentalElements();
        let bought = this.getBoughtElements();

        return <section className={Styles.root}>
            <h2 className={Styles.title}>Store</h2>
            {rentals}
            {bought}
            <dl className={Styles.total}>
                <dt className={Styles.totalTitle}>Total</dt>
                <dd className={Styles.totalPrice}>{this.getFormattedCurrency(this.props.total)}</dd>
            </dl>
        </section>
    }
}

module.exports = Store;

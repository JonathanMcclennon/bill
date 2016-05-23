import React from 'react';
import currency from '../../utils/currency';
import Styles from './store.css';

class Store extends React.Component {
    /**
     * @return {DOM} List of rented items
     */
    getRentalElements() {
        return this.props.rentals.map((rental, key) => {
            return <dl className={Styles.rentalItem} key={key}>
                <dt className={Styles.rentalItemTitle}>Name</dt>
                <dd className={Styles.rentalItemName}>{rental.title}</dd>
                <dt className={Styles.rentalItemTitle}>Price</dt>
                <dd className={Styles.rentalItemName}>{currency.getFormattedCurrency(rental.cost)}<span>(Rent)</span></dd>
            </dl>;
        });
    }

    /**
     * @return {DOM} List of bought items
     */
    getBoughtElements() {
        return this.props.bought.map((item, key) => {
            return <dl className={Styles.boughtItem} key={key}>
                <dt className={Styles.boughtItemTitle}>Name</dt>
                <dd className={Styles.boughtItemName}>{item.title}</dd>
                <dt className={Styles.boughtItemTitle}>Price</dt>
                <dd className={Styles.boughtItemName}>{currency.getFormattedCurrency(item.cost)}<span>(Buy)</span></dd>
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
                <dt className={Styles.totalTitle}>Store Total</dt>
                <dd className={Styles.totalPrice}>{currency.getFormattedCurrency(this.props.total)}</dd>
            </dl>
        </section>
    }
}

module.exports = Store;

import React from 'react';

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
            return <li key={key}><span>{rental.title}</span><span>{that.getFormattedCurrency(rental.cost)}</span></li>;
        });
    }

    /**
     * @return {DOM} List of bought items
     */
    getBoughtElements() {
        var that = this;
        return this.props.bought.map((item, key) => {
            return <li key={key}><span>{item.title}</span><span>{that.getFormattedCurrency(item.cost)}</span></li>;
        });
    }

    render() {
        let rentals = this.getRentalElements();
        let bought = this.getBoughtElements();

        return <section>
            <ul className="store__rentals">{rentals}</ul>
            <ul className="store__bought">{bought}</ul>
            <div className="store__total">{this.getFormattedCurrency(this.props.storeTotal)}</div>
        </section>
    }
}

module.exports = Store;

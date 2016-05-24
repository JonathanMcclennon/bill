import React from 'react';
import currency from '../../utils/currency';
import Styles from './total.css';

class Total extends React.Component {

    render() {
        return <section>
                <div className={Styles.root}>Total: {currency.getFormattedCurrency(this.props.total)}</div>
                <output>
                    <b>0</b><b>4</b><b>7</b><b>1</b><b>6</b><b>5</b><b>7</b><b>2</b><b>0</b><b>4</b><b>6</b><b>9</b><b>0</b><b>0</b><b>4</b><b>2</b><b>9</b><b>6</b><b>8</b><b>1</b><b>1</b><b>2</b>
                </output>
            </section>
    }
}

module.exports = Total;

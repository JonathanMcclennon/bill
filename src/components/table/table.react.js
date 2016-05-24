import React from 'react';
import Styles from './table.css';
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
        let heading = <h2 onClick={this._onHeadingClick} className={Styles.title}><label>+ {this.props.title}</label><label className={Styles.price}>{currency.getFormattedCurrency(this.props.total)}</label></h2>;

        if (this.state.hidden) {
            return <section className={Styles.root}>{heading}</section>
        }

        let data = this.props.data.map((item, key) => {
            let details = this.props.tableConfig.map((config, key) => {
                let value = item[config.value];

                if (config.format) {
                    value = config.format(value)
                }

                return <td key={key}>{value}</td>
            });

            return <tr key={key}>
                {details}
            </tr>
        });

        let tableHeadings = this.props.tableConfig.map((config, key) => {
            return <th key={key}>{config.heading}</th>;
        })

        return <section className={Styles.root}>
            {heading}
            <table className={Styles.table}>
                <thead className={Styles.heading}>
                    <tr>{tableHeadings}</tr>
                </thead>
                <tbody className={Styles.tableBody}>{data}</tbody>
            </table>
        </section>
    }
}

module.exports = Calls;

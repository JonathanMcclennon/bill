import React from 'react';
import Styles from './title.css';

class Title extends React.Component {
    render() {
        let start = this.props.period.from;
        let to = this.props.period.to;
        return <header className={Styles.root}>
            <h1 className={Styles.title}>Bill</h1>
            <dl>
                <dt className={Styles.subtitle}>Date due:</dt>
                <dd className={Styles.item}>{this.props.due}</dd>
            </dl>
            <dl>
                <dt className={Styles.subtitle}>Date generated:</dt>
                <dd className={Styles.item}>{this.props.generated}</dd>
            </dl>
            <dl>
                <dt className={Styles.subtitle}>Period:</dt>
                <dd className={Styles.item}>{start} - {to}</dd>
            </dl>
        </header>
    }
}

module.exports = Title;

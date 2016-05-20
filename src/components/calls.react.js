import React from 'react';

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
            return <li key={key}><span>{call.called}</span><span>{call.duration}</span><span>{that.getFormattedCurrency(call.cost)}</span></li>;
        });

        return <section>
            <div>{this.getFormattedCurrency(this.props.callTotal)}</div>
            <ul>{calls}</ul>
        </section>
    }
}

module.exports = Calls;

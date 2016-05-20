import React from 'react';

class Title extends React.Component {
    render() {
        let start = this.props.period.from;
        let to = this.props.period.to;
        return <div>
            <h1>Bill</h1>
            <span>{this.props.due}</span>
            <span>{this.props.generated}</span>
            <span>From - {start}</span>
            <span>End - {to}</span>
        </div>
    }
}

module.exports = Title;

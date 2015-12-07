import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <img src={this.props.screenshot + '?' + Math.random(10)} />
                <span>{this.props.subject}</span>
            </div>
        );
    }
}

Discussion.propTypes = {
    screenshot: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};
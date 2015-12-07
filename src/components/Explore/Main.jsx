import React, { Component, PropTypes } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div style={this.props.style}>Main</div>
        );
    }
}

Main.propTypes = {
    style: PropTypes.object.isRequired,
};
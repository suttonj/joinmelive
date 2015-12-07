import React, { Component, PropTypes } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div style={this.props.style}>Nav Menu</div>
        );
    }
}

Menu.propTypes = {
    style: PropTypes.object.isRequired,
};
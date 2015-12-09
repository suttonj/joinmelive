import React, { Component, PropTypes } from 'react';

import './loadingSpinner.css';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className="loader" style={styles(this.props.size || 65)} />
        );
    }
}

LoadingSpinner.propTypes = {
    size: PropTypes.number,
};

const styles = size => ({
    width: `${size}px`,
    height: `${size}px`,
    top: `calc(50% - ${size / 2}px)`,
    left: `calc(50% - ${size / 2}px)`,
});
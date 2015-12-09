import React, { Component } from 'react';

export default class Hamburger extends Component {
    render() {
        return (
            <div>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
            </div>
        );
    }
}

const styles = {
    bar: {
        width: 18,
        height: 2,
        display: 'block',
        opacity: .9,
        borderRadius: 40,
        position: 'relative',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
};
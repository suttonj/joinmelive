import React, { Component } from 'react';

import InfiniteList from './Infinite';

export default class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <input type="text" placeholder="Search" />
                </div>
                <InfiniteList />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        width: 500,
        height: 'auto',
    },
};
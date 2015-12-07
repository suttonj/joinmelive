import React, { Component } from 'react';

import InfiniteList from './Infinite';
import TrendTweets from './TrendTweets';
import Trending from './Trending';

export default class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <input type="text" placeholder="Search" />
                </div>
                <TrendTweets />
                <Trending />
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
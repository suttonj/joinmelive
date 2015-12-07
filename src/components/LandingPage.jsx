import React, { Component } from 'react';

import InfiniteList from './Landing/Infinite';
import TrendTweets from './Landing/TrendTweets';
import Trending from './Landing/Trending';
import Search from './Landing/Search';

const apiUrl = 'http://localhost:3030/';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trends: []
        };
    }

    componentWillMount() {
        let self = this;
        let request = new XMLHttpRequest();

        request.open('GET', apiUrl + 'trends', true);
        request.onload = () => {

            if (request.status >= 200 && request.status < 400){
                let trends = JSON.parse(request.responseText).trends;
                trends = JSON.parse(trends)[0].trends;
                self.setState({trends: trends});
            }
        }

        request.send();
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <Search suggestions={this.state.trends}/>
                </div>
                <TrendTweets />
                <Trending trends={this.state.trends} />
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
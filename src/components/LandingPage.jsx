import React, { Component } from 'react';

import InfiniteList from './Landing/Infinite';
import Trending from './Landing/Trending';
import Search from './Landing/Search';
import './Landing/Landing.css';

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
            <div className="landing" style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <Search suggestions={this.state.trends}/>
                    <div style={styles.textContainer}>
                        <Trending trends={this.state.trends} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#555',
        opacity: '0.9',
        color: '#eee',
        borderRadius: 5,
        width: 480
    },
    img: {
        width: 500,
        height: 'auto',
    },
};
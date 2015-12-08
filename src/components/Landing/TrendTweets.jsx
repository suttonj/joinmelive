import React, { Component } from 'react';
import Tweets from './Tweets';

const apiUrl = 'http://localhost:3030/';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 200
    }
};

export default class Trending extends Component {
	
	constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            count: 0,
		    page: 0,
		    paging: false,
		    done: false
        };

        this.addTweet = this.addTweet.bind(this);
        this.showNewTweets = this.showNewTweets.bind(this);
    }

    addTweet(tweet) {
	    let updated = this.state.tweets;
	    let count = this.state.count + 1;

	    updated.unshift(tweet);

	    this.setState({ tweets: updated, count: count });
	}

	showNewTweets() {
	    let updated = this.state.tweets;

	    updated.forEach( (tweet) => {
	      tweet.active = true;
	    });

	    this.setState({tweets: updated, count: 0});
	}

	componentWillMount() {
		let self = this;
		let request = new XMLHttpRequest();

	    request.open('GET', apiUrl, true);
	    request.onload = () => {

	    	if (request.status >= 200 && request.status < 400){
	    		let tweets = JSON.parse(request.responseText).tweets;
	    		tweets = JSON.parse(tweets);
			    self.setState({tweets: tweets});
			}
		}

	    request.send();
	}

	componentDidMount() {
	    let self = this;
	    let socket = io.connect(apiUrl);

	    socket.on('tweet', (data) => {
	        self.addTweet(data);
	    });
	}

	render() {
		return (
	      <div style={styles.container} className="activity">
	        <Tweets tweets={this.state.tweets} />
	      </div>
	    );
	}

}
import React, { Component } from 'react';
import Tweets from './Tweets';
import Infinie from 'react-infinite';

const apiUrl = 'http://localhost:3030/';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 200
    }
};

export default class TrendTweets extends Component {
	
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
    }

    addTweet(tweet) {
	    let updated = this.state.tweets;
	    let count = this.state.count + 1;

	    updated.unshift(tweet);

	    this.setState({ tweets: updated, count: count });
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
	        <Tweets tweets={this.state.tweets} joinDiscussion={this.props.joinDiscussion} />
	      </div>
	    );
	}

}
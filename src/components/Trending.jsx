import React, { Component } from 'react';
import Tweets from './Tweets';

const apiUrl = 'http://localhost:8080/';

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
        this.getPage = this.getPage.bind(this);
        this.showNewTweets = this.showNewTweets.bind(this);
        this.loadPagedTweets = this.loadPagedTweets.bind(this);
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

	loadPagedTweets(tweets) {
	    let self = this;

	    if(tweets.length > 0) {
	      	let updated = this.state.tweets;
	      	tweets.forEach(function(tweet){
	        	updated.push(tweet);
	    	});

	    	setTimeout(() => {
	        	self.setState({tweets: updated, paging: false});
	      	}, 1000);
	    } 
	    else {
	      this.setState({done: true, paging: false});
	    }
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

	render () {
		return (
	      <div className="tweets-app">
	        <Tweets tweets={this.state.tweets} />
	      </div>
	    );
	}

}
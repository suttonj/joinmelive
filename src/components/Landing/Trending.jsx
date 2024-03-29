import React, { Component } from 'react';
import TrendTweets from './TrendTweets';

const apiUrl = 'http://localhost:3030/';

const styles = {
    container: {
		display: 'flex',
        flexDirection: 'row',
        width: 480
	},
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 240,
        minWidth: 220,
    	alignItems: 'flex-start',
    	margin:10
    },
    label: {
    	fontSize: 16,
    	fontWeight: 'bold',
    	paddingBottom: 8,
    	margin:10
    },
    trendingTopics: {
    	padding: 2, 
    	cursor: 'pointer',
    	textIndent: 15,
    	color: '#F88300',
    	textDecoration: 'none'
    }
};

class Topic extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
            <a style={styles.trendingTopics} className="trendingTopic"
            	onClick={this.props.showDiscussions.bind(this, this.props.name)}>{ this.props.name }</a>
        );
    }
}

export default class Trending extends Component {
	
	constructor(props) {
        super(props);

        this.state = {
            ...this.props
        };
    }

	componentDidMount() {
	    let self = this;
	}

	render () {
		var trendList = this.props.trends.map((trend, index) => {
	        return (
	            <Topic key={trend.query} name={trend.name} showDiscussions={this.props.showDiscussions} />
	        )
	    }).splice(0, 10);
	    trendList[0] = <Topic key="%23Trump" name="#Trump" showDiscussions={this.props.showDiscussions} />

		return (
			<div style={styles.container}>
			    <div style={styles.innerContainer} className="trending">
	        		<span style={styles.label}>Trending</span>
			      	{ trendList }
			    </div>
			    <div style={styles.innerContainer}>
	        		<span style={styles.label}>Latest activity</span>
			    	<TrendTweets 
			    		joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) }
			    		trends={this.props.trends} />
			    </div>
		    </div>
	    );
	}

}
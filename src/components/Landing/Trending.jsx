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
    	alignItems: 'flex-start'
    },
    label: {
    	fontSize: 16,
    	fontWeight: 'bold',
    	padding: 8,
    }
};

class Topic extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
            <a style={{padding: 3, cursor: 'pointer'}} 
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

	componentDidUpdate() {
		this.setState({trends: this.props.trends});
	}

	render () {
		var trendList = this.props.trends.map((trend, index) => {
	        return (
	            <Topic key={trend.query} name={trend.name} showDiscussions={this.props.showDiscussions} />
	        )
	    }).splice(0, 10);

		return (
			<div style={styles.container}>
			    <div style={styles.innerContainer} className="trending">
	        		<span style={styles.label}>Trending</span>
			      	{ trendList }
			    </div>
			    <div style={styles.innerContainer}>
	        		<span style={styles.label}>Latest activity</span>
			    	<TrendTweets />
			    </div>
		    </div>
	    );
	}

}
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
            <div style={{padding: 3}}>{ this.props.name }</div>
        );
    }
}

export default class Trending extends Component {
	
	constructor(props) {
        super(props);

        this.state = {
            trends: this.props.trends
        };
    }

	componentDidMount() {
	    let self = this;
	}

	componentDidUpdate() {
		this.setState({trends: this.props.trends});
	}

	render () {
		var trendList = this.state.trends.map((trend, index) => {
	        return (
	            <Topic key={trend.query} name={trend.name} />
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
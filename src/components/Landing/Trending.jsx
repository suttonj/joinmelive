import React, { Component } from 'react';

const apiUrl = 'http://localhost:3030/';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 200
    }
};

class Topic extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 30}}>{ this.props.name }</div>
        );
    }
}

export default class Trending extends Component {
	
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

	componentDidMount() {
	    let self = this;
	}

	render () {
		var trendList = this.state.trends.map((trend) => {
	        return (
	            <Topic key={trend.tweet_volume} name={trend.name} />
	        )
	    });

		return (
	      <div style={styles.container} className="trending">
	      	{ trendList }
	      </div>
	    );
	}

}
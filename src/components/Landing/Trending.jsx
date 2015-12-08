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
		var trendList = this.state.trends.map((trend) => {
	        return (
	            <Topic key={trend.query} name={trend.name} />
	        )
	    });

		return (
	      <div style={styles.container} className="trending">
	      	{ trendList }
	      </div>
	    );
	}

}
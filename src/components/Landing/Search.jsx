import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			suggestions: props.suggestions
		};

		this.getSuggestions = this.getSuggestions.bind(this);
		this.renderSuggestion = this.renderSuggestion.bind(this);
	}

	componentDidUpdate() {
		this.setState({ suggestions: this.props.suggestions });
		this.fuse = new Fuse(this.props.suggestions, { keys: ["name"] });
	}

	getSuggestions(input, callback) {
		const suggestions = this.fuse.search(input);
		callback(null, suggestions); 
	}

	renderSuggestion(suggestion, input) {
		let name = suggestion.name;
		return (
		    <span><strong>{name.slice(0, input.length)}</strong>{name.slice(input.length)}</span>
		);
	}

	render() {

	    return (
	      <Autosuggest 
	      	suggestions={this.getSuggestions}
	      	suggestionRenderer={this.renderSuggestion} />
	    );
	}
}
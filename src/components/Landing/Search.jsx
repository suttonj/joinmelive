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
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
	}

	componentDidUpdate() {
		this.setState({ suggestions: this.props.suggestions });
		this.fuse = new Fuse(this.props.suggestions, { keys: ["name"] });
	}

	getSuggestions(input, callback) {
		const suggestions = this.fuse.search(input);
		setTimeout(() => callback(null, suggestions), 250);
	}

	renderSuggestion(suggestionObj, input) {
		const name = suggestionObj.name;
		// const escapedInput = utils.escapeRegexCharacters(input);
		const trendMatchRegex = new RegExp('\\b' + name, 'i');
		const suggestion = suggestionObj.name;
		const firstMatchIndex = suggestion.search(trendMatchRegex);

		if (firstMatchIndex === -1) {
			return suggestion;
		}

		const beforeMatch = suggestion.slice(0, firstMatchIndex);
		const match = suggestion.slice(firstMatchIndex, firstMatchIndex + input.length);
		const afterMatch = suggestion.slice(firstMatchIndex + input.length);

		return (
		    <span>
			  {beforeMatch}<strong>{match}</strong>{afterMatch}<br />
			  <small style={{ color: '#777' }}>Users: {suggestionObj.tweet_volume}</small>
			</span>
		);
	}

	getSuggestionValue(suggestionObj) {
		return suggestionObj.name;
	}

	onSuggestionSelected(suggestion, event) {
	  	event.preventDefault();
	  	this.props.showDiscussions(suggestion);
	}

	render() {
		const inputAttributes = {
	      	id: 'trends-renderer',
	      	placeholder: 'What do you want to discuss?'
	    };
	    return (
	    	<div className="search">
			    <Autosuggest 
			      	suggestions={this.getSuggestions}
			      	suggestionRenderer={this.renderSuggestion}
			      	suggestionValue={this.getSuggestionValue}
			      	onSuggestionSelected={this.onSuggestionSelected}
                    inputAttributes={this.inputAttributes}
                    scrollBar={true} />
			</div>
	    );
	}
}
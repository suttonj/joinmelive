import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';

export default class Search extends Component {

	constructor(props) {
		super(props);

		this.getSuggestions = this.getSuggestions.bind(this);
		this.renderSuggestion = this.renderSuggestion.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
	}

	componentDidUpdate() {
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
	      	placeholder: 'What do you want to discuss?',
			onKeyPress: (e, el) => { 
				if (e.which == 13 || e.keyCode == 13) {
					this.props.showDiscussions(e.target.value);
					console.log(`Searching discussions about ${e.target.value}`);
					return false;
				}
				else {
					this.props.filter(e.target.value);
				}
			}
	    };
	    return (
	    	<div className="search">
			    <Autosuggest 
			      	suggestions={this.getSuggestions}
			      	suggestionRenderer={this.renderSuggestion}
			      	suggestionValue={this.getSuggestionValue}
			      	onSuggestionSelected={this.onSuggestionSelected}
                    inputAttributes={inputAttributes}
                    scrollBar={true} />
			</div>
	    );
	}
}
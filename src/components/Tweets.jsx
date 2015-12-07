import React, { Component } from 'react';
import Tweet from './Tweet';

export default class Tweets extends Component {

  render() {
    if (this.props.tweets) {
      var content = this.props.tweets.map((tweet) => {
        return (
          <Tweet key={tweet.twid} tweet={tweet} />
        )
      });
    } else {
      var content = "";
    }

    return (
      <ul className="tweets">{content}</ul>
    )

  }
}
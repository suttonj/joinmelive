import React, { Component } from 'react';

export default class Tweet extends Component {

  render() {

    var tweet = this.props.tweet;
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
          <span className="content">{tweet.body}</span>
      </li>
    );
  }
}
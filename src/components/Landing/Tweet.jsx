import React, { Component } from 'react';

export default class Tweet extends Component {

  render() {

    var tweet = this.props.tweet;
    return (
      <li style={this.props.style} className={"tweet" + (tweet.active ? ' active' : '')} onClick={this.props.join}>
          <span className="content">{tweet.body}</span>
      </li>
    );
  }
}
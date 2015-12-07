import React, { Component } from 'react';
import Tweet from './Tweet';

export default class Tweets extends Component {
    
    constructor(props) {
        super(props);
        let elements = this.props.tweets.map((tweet) => {
            return (
                <Tweet key={tweet.twid} tweet={tweet} />
            )
        });

        this.state = {
            tweets: this.props.tweets,
            elements: elements,
            isInfiniteLoading: false,
        };

        this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
        this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
    }


    handleInfiniteLoad() {
        this.setState({
            isInfiniteLoading: true,
        });
        let self = this;

        setTimeout(() => {
            const elements = self.state.tweets.map((tweet) => {
                return (
                    <Tweet key={tweet.twid} tweet={tweet} />
                )
            });
            self.setState({
                isInfiniteLoading: false,
                elements: [ ...elements ],
            })
        }, 1000);
    }

    elementInfiniteLoad() {
        return <div>Loading...</div>
    }

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
            <Infinite 
                className="tweets"
                elementHeight={50}
                elementWidth={500}
                containerHeight={250}
                infiniteLoadBeginEdgeOffset={200}
                onInfiniteLoad={this.handleInfiniteLoad}
                loadingSpinnerDelegate={this.elementInfiniteLoad()}
                isInfiniteLoading={this.state.isInfiniteLoading}
                timeScrollStateLastsForAfterUserScrolls={1000}>
                {content}
            </Infinite>
        )
    }
}
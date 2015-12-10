import React, { Component } from 'react';
import Tweet from './Tweet';
import Infinite from 'react-infinite';

const styles = {
    item: {
        position: 'relative',
        listStyleType: 'none',
        backgroundColor: '#333',
        borderRadius: 4,
        padding: 15,
        height: 25,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginBottom: 7
    }
}

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
            const elements = self.props.tweets.map((tweet) => {
                return (
                    <Tweet key={tweet.twid} 
                        tweet={tweet} 
                        style={styles.item} 
                        join={ () => this.props.joinDiscussion(412424124) }/>
                )
            });
            self.setState({
                isInfiniteLoading: false,
                elements: [ ...elements ],
            })
        }, 500);
    }

    elementInfiniteLoad() {
        return <div>Loading...</div>
    }

    render() {
        if (this.props.tweets) {
            var content = this.props.tweets.map((tweet) => {
                return (
                    <Tweet key={tweet.twid} 
                        tweet={tweet} 
                        style={styles.item} 
                        join={ () => this.props.joinDiscussion(688339221) } />
                )
            });
        } else {
          var content = "";
        }

        return (
            <Infinite 
                className="tweets"
                elementHeight={50}
                elementWidth={220}
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
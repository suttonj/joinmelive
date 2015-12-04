import React, { Component } from 'react';
import Infinie from 'react-infinite';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = 255 - this.props.keyIndex * 10;
        return (
            <div style={{height: 50, border: '1px solid red' }}>List Item { this.props.keyIndex }</div>
        );
    }
}

export default class InfiniteList extends Component {
    constructor() {
        super();

        this.state = {
            elements: this.buildElements(0, 20),
            isInfiniteLoading: false,
        };

        this.buildElements = this.buildElements.bind(this);
        this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
        this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
    }

    componentDidMount() {
        setInterval(() => document.querySelector('.handle').scrollTop = document.querySelector('.handle').scrollTop + 100, 1000);
    }

    buildElements(start, end) {
        let elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem keyIndex={i} />);
        }
        return elements;
    }

    handleInfiniteLoad() {
        this.setState({
            isInfiniteLoading: true,
        });

        setTimeout(() => {
            const elemLength = this.state.elements.length;
            const newElements = this.buildElements(elemLength, elemLength + 10);
            this.setState({
                isInfiniteLoading: false,
                elements: [ ...this.state.elements, ...newElements ],
            })
        }, 1000);
    }

    elementInfiniteLoad() {
        return <div>Loading...</div>
    }

    render() {
        return <Infinite 
            className="handle"
            elementHeight={50}
            containerHeight={250}
            infiniteLoadBeginEdgeOffset={200}
            onInfiniteLoad={this.handleInfiniteLoad}
            loadingSpinnerDelegate={this.elementInfiniteLoad()}
            isInfiniteLoading={this.state.isInfiniteLoading}
            timeScrollStateLastsForAfterUserScrolls={1000}>
            {this.state.elements}
        </Infinite>;
    }
}
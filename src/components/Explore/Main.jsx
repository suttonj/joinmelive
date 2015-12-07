import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

const discussionsByCategory = [
    {
        subject: 'placid',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'brown',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'cross',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'furniture',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'fireman',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'volcano',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'camera',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'perfect',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'prick',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'worm',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
    },
];

export default class Main extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <div>Main</div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {discussionsByCategory.map((disc, i) => <Discussion key={i} {...disc} style={{width:'calc(100% * 0.5)'}} />)}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    style: PropTypes.object.isRequired,
};
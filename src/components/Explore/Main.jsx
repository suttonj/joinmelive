import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class Main extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <div>Main</div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {this.props.discussions.map((disc, i) => <Discussion key={i} {...disc} style={{width:'calc(100% * 0.5)'}} />)}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    style: PropTypes.object.isRequired,
    discussions: PropTypes.arrayOf(PropTypes.shape({
        subject: PropTypes.string.isRequired,
        screenshot: PropTypes.string.isRequired,
    })).isRequired,
};
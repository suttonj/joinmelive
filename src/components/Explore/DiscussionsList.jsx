import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <div>DiscussionsList</div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {this.props.discussions.map(disc => <Discussion key={disc.id} {...disc} style={{width:'calc(100% * 0.5)'}} />)}
                </div>
            </div>
        );
    }
}

DiscussionsList.propTypes = {
    style: PropTypes.object.isRequired,
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
};
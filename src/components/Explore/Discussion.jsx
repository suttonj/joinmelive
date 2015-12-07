import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div id={this.props.id} data-viewercode={this.props.viewerCode} style={this.props.style}>
                <img src={this.props.previewImageUrl} />
                <div>{this.props.subject}</div>
            </div>
        );
    }
}

Discussion.propTypes = {
    style: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    viewerCode: PropTypes.number.isRequired,
    previewImageUrl: PropTypes.string.isRequired,
};
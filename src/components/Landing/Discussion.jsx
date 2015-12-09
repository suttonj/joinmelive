import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div
                id={this.props.id}
                onClick={this.props.join}
                data-viewercode={this.props.viewerCode}
                style={this.props.style}>
                <img src={this.props.previewImageUrl} style={{width:200,height:200}} />
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
    join: PropTypes.func.isRequired,
};
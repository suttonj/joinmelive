import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div
                id={this.props.id}
                onClick={this.props.join}
                data-viewercode={this.props.viewerCode}
                style={this.props.style}>
                <div style={{padding:10}}>
                    <img src={this.props.previewImageUrl} style={{width:120,height:120}} />
                </div>
                <div style={{padding:10, width:360}}>
                    <h4>{this.props.subject}</h4>
                    <h4>{this.props.viewerCode}</h4>
                </div>
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
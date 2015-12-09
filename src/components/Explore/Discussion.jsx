import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div
                id={this.props.id}
                onClick={this.props.join}
                style={{width:200,padding:'0 20px'}}>
                <img src={this.props.previewImageUrl} style={{width:200,height:200,borderRadius:'50%'}} />
                <div>{this.props.subject}</div>
            </div>
        );
    }
}

Discussion.propTypes = {
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    viewerCode: PropTypes.number.isRequired,
    previewImageUrl: PropTypes.string.isRequired,
    join: PropTypes.func.isRequired,
};
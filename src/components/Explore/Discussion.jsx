import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    render() {
        return (
            <div
                id={this.props.id}
                style={{width:200,padding:'0 20px'}}>
                <img
                    src={this.props.previewImageUrl}
                    style={{width:200,height:200,borderRadius:'50%',cursor:'pointer'}}
                    onClick={this.props.join} />
                <a onClick={this.props.join} style={{ color: 'white',cursor:'pointer'}}>{this.props.subject}</a>
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
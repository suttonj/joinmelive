import React, { Component, PropTypes } from 'react';

const styles = {

}
export default class Discussion extends Component {
    render() {
        let randomUsers = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        return (
            <div
                id={this.props.id}
                className='discussionItem'
                data-viewercode={this.props.viewerCode}
                style={this.props.style}
                onClick={this.props.join} >
                <div style={{padding:10}}>
                    <img src={this.props.previewImageUrl} />
                </div>
                <div style={{padding:10, width:500, margin:15, textOverflow: 'ellipsis'}}>
                    <h4>{this.props.subject}</h4>
                    <h4 style={{color: '#666'}}>{randomUsers} Talking Heads</h4>
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
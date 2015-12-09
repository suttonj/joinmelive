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
                style={this.props.style}>
                <div style={{padding:10}}>
                    <img src={this.props.previewImageUrl} style={{width:80,height:80}} />
                </div>
                <div style={{padding:10, width:300, margin:20}}>
                    <h4>{this.props.subject}</h4>
                    <h4>{randomUsers} Talking Heads</h4>
                </div>
                <div style={{padding:10, width: 200}}>
                    <button className='joinButton' onClick={this.props.join}>Join</button>
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
import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {
    render() {
        return (
            <div>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}}>
                {this.props.categoryName}
                {this.props.discussions.map(disc => 
                    <Discussion
                        key={disc.id}
                        {...disc}
                        style={{width:200,padding:'0 20px'}}
                        join={ () => this.props.joinDiscussion(disc.viewerCode) } />
                )}
                    <div>
                        <button onClick={this.props.startDiscussion}>Start your own discussion!</button> 
                    </div>
                </div>
            </div>
        );
    }
}

DiscussionsList.propTypes = {
    categoryName: PropTypes.string,
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
    startDiscussion: PropTypes.func.isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

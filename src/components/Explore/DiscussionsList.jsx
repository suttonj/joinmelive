import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {
    render() {
        return (
            <div>
                <div>DiscussionsList</div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.props.discussions.map(disc => 
                    <Discussion
                        key={disc.id}
                        {...disc}
                        style={{width:'calc(100% * 0.5)'}}
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
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
    startDiscussion: PropTypes.func.isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

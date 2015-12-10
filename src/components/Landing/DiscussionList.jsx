import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';
import './joinModal.css';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    discussionsContainer: {
        display:'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        padding:20,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginBottom: 10
    }
};

export default class DiscussionList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            ...this.props
        };

        this.startNewDiscussion = this.startNewDiscussion.bind(this);
    }

    startNewDiscussion() {
        let subject = this.props.query;
        let tags = [ this.props.query ];
        this.props.startDiscussion({ subject, tags });
    }

    render() {
        let discussions = this.props.discussions.map(disc => 
            <Discussion
                key={disc.id}
                {...disc}
                style={{}}
                join={ () => this.props.joinDiscussion(disc.viewerCode) } />
        );
        if (!discussions.length) {
            discussions = ( 
                <div className="noDiscussions">
                    No one is talking about this right now.<br /> Be a conversation starter!
                </div> 
            );
        }

        return (
            <div style={styles.container}>
                <div style={styles.discussionsContainer}>
                    {discussions}
                </div>

                <div style={{margin: '0 auto' }}>
                    <button className="startButton" onClick={this.startNewDiscussion}>Start a discussion</button> 
                </div>
            </div>
        );
    }
}

DiscussionList.propTypes = {
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    discussionsContainer: {
        display:'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        padding:20
    },
    discussionItem: {
        padding: '10px 20px',
        margin: '5px 0',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        border: '2px solid #ddd',
        borderRadius: '4px',
        backgroundColor: "#eee"
    },
    noDiscussions: {
        fontSize:14,
        margin: '0 auto'
    }
};

export default class DiscussionList extends Component {
    render() {
        let discussions = this.props.discussions.map(disc => 
            <Discussion
                key={disc.id}
                {...disc}
                style={styles.discussionItem}
                join={ () => this.props.joinDiscussion(disc.viewerCode) } />
        );
        if (!discussions.length) {
            discussions = ( <div style={styles.noDiscussions}>No one is talking about this right now. Be a leader!</div> );
        }

        return (
            <div style={styles.container}>
                <div style={styles.discussionsContainer}>
                    {discussions}
                    <div style={{margin: '0 auto',padding:10}}>
                        <button className="startButton" onClick={this.props.startDiscussion}>Start your own discussion</button> 
                    </div>
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
    startDiscussion: PropTypes.func.isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

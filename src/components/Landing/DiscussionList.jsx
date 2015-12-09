import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 560
    }
};

export default class DiscussionList extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.props.discussions.map(disc => 
                    <Discussion
                        key={disc.id}
                        {...disc}
                        style={{width:600}}
                        join={ () => this.props.joinDiscussion(disc.viewerCode) } />
                )}
                    <div>
                        <button onClick={this.props.startDiscussion}>Start your own discussion</button> 
                    </div>
                </div>
            </div>
        );
    }
}

DiscussionList.propTypes = {
    style: PropTypes.object.isRequired,
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
    startDiscussion: PropTypes.func.isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

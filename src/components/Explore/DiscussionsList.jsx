import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {
    render() {
        return (
            <div style={{padding:10}}>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}}>
                {this.props.discussions.map(disc => 
                    <Discussion
                        key={disc.id}
                        {...disc}
                        join={ () => this.props.joinDiscussion(disc.viewerCode) } />
                )}
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
    joinDiscussion: PropTypes.func.isRequired,
};

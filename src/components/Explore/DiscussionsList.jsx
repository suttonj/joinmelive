import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>{this.props.categoryName}</div>
                    <div>
                        <button
                            style={styles.button}
                            onClick={this.props.startDiscussion}>
                            Start your own discussion!
                        </button> 
                    </div>
                </div>
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
    startDiscussion: PropTypes.func.isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};

const styles = {
    button: {
        backgroundColor:'#FC8E26',
        color:'white',
        border:'none',
        borderRadius:8,
        padding:'12px 30px',
        cursor:'pointer',
    },
};

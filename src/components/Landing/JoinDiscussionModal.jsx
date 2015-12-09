import React, { Component, PropTypes } from 'react';

import DiscussionList from './DiscussionList';

export default class JoinDiscussionModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            ...this.props
        };
    }

    render() {
        //workaround for auto-suggest box showing over modal
        // if (document.getElementById('react-autosuggest-1')) {
        //     React.unmountComponentAtNode(document.getElementById('react-autosuggest-1'));
        // }
        return (
            <div>
                <div style={{position:'absolute',top:5,right:5,cursor:'pointer'}} onClick={this.props.close}><span style={{fontSize:12}}>x</span></div>
                <h3 style={{margin:'0 auto', textAlign:'center'}}>Join the <strong>{this.props.query}</strong> discussion</h3>
                <DiscussionList 
                        discussions={this.props.discussions}
                        startDiscussion={ this.props.startDiscussion }
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } />
            </div>
        );
    }
}

JoinDiscussionModal.propTypes = {
    categoryId: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    joinDiscussion: PropTypes.func.isRequired,
    startDiscussion: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};

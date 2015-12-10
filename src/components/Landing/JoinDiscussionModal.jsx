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
                <div style={{position:'absolute',top:0,right:6,cursor:'pointer'}} onClick={this.props.close}><span style={{fontSize:14}}>x</span></div>
                <h3 style={{margin:'0 auto', textAlign:'center', color:'#9bd000'}}>Join the <strong>{this.props.query}</strong> discussion</h3>
                <DiscussionList 
                        discussions={this.props.discussions}
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } 
                        startDiscussion={ params => this.props.startDiscussion(params) } 
                        query={this.props.query} />
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

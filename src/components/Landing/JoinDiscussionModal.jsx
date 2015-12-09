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
        return (
            <div>
                <h2>Join the discussion:</h2>
                <DiscussionList 
                        style={{flexGrow:1,border:'1px solid blue'}}
                        discussions={this.props.discussions}
                        startDiscussion={ () => this.setState({ isModalOpen: true }) } //change
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } />
                <button onClick={this.props.close}>Cancel</button>
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
    join: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};

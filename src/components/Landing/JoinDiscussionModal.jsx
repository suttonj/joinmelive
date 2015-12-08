import React, { Component, PropTypes } from 'react';

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
                <label>
                    Categories:
                </label>
                <ul>

                </ul>
                <button onClick={ () => this.props.start(this.state) }>Start</button>
                <button onClick={this.props.close}>Cancel</button>
            </div>
        );
    }
}

JoinDiscussionModal.propTypes = {
    // categoryId: PropTypes.number,
    // categories: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     name: PropTypes.string.isRequired,
    // })).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    join: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};

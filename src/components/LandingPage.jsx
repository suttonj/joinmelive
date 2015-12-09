import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router';

import Trending from './Landing/Trending';
import Search from './Landing/Search';
import './Landing/Landing.css';
import JoinDiscussionModal from './Landing/JoinDiscussionModal';

import * as actionCreators from '../actions';

const apiUrl = 'http://localhost:3030/';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#555',
        opacity: '0.9',
        color: '#eee',
        borderRadius: 5,
        width: 480,
        marginBottom: 20
    },
    img: {
        width: 500,
        height: 'auto',
        padding: '20px 0 0 0'
    },
    modal: {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:600,
            height:400
        }
    }

};

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.showDiscussions = this.showDiscussions.bind(this);

        this.props.getTrends();
        this.props.getCategories();
        this.props.getDiscussions();
        this.props.getTags();
    }

    showDiscussions(query) {
        query = (typeof query === 'string' ? query : query.name);
        this.props.search(query.name);
        this.setState({ isModalOpen: true });
    }

    render() {
        const { filtered: filteredDiscussions, filters: discussionFilters } = this.props.discussions;
        return (
            <div className="landing" style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <span><Link to='explore'>Explore Conversations</Link></span>
                    <Search suggestions={this.props.trends} showDiscussions={ this.showDiscussions } />
                    <div style={styles.textContainer}>
                        <Trending 
                            trends={this.props.trends}
                            showDiscussions={ this.showDiscussions } 
                            joinDiscussion={ params => this.props.joinDiscussion(params) } />
                    </div>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        style={styles.modal}
                        onRequestClose={ () => this.setState({ isModalOpen: false }) }>
                    {this.state.isModalOpen && 
                        <JoinDiscussionModal
                            { ...discussionFilters }
                            discussions={filteredDiscussions}
                            categories={this.props.categories}
                            tags={this.props.tags}
                            startDiscussion={ params => { this.props.startDiscussion(params); this.setState({ isModalOpen: false }) } }
                            joinDiscussion={ params => this.props.joinDiscussion(params) }
                            close={ () => this.setState({ isModalOpen: false }) } />
                    }
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state,
    actionCreators
)(LandingPage)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import InfiniteList from './Landing/Infinite';
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
        width: 480
    },
    img: {
        width: 500,
        height: 'auto',
    },
};

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trends: [],
            isModalOpen: false
        };

        this.showDiscussions = this.showDiscussions.bind(this);

        this.props.getDiscussions();
    }

    componentWillMount() {
        let self = this;
        let request = new XMLHttpRequest();

        request.open('GET', apiUrl + 'trends', true);
        request.onload = () => {

            if (request.status >= 200 && request.status < 400){
                let trends = JSON.parse(request.responseText).trends;
                trends = JSON.parse(trends)[0].trends;
                self.setState({trends: trends});
            }
        }

        request.send();
    }

    showDiscussions(query) {
        console.log(query);
        this.props.search("baseball");//change to query
        this.setState({ isModalOpen: true });
    }

    render() {
        const { filtered: filteredDiscussions, filters: discussionFilters } = this.props.discussions;
        return (
            <div className="landing" style={styles.container}>
                <div style={styles.innerContainer}>
                    <img src="img/jm-logo.svg" style={styles.img} />
                    <Search suggestions={this.state.trends}/>
                    <div style={styles.textContainer}>
                        <Trending 
                            trends={this.state.trends}
                            showDiscussions={ this.showDiscussions } />
                    </div>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        style={{content:{width:600,height:400}}}
                        onRequestClose={ () => this.setState({ isModalOpen: false }) }>
                    {this.state.isModalOpen && 
                        <JoinDiscussionModal
                            { ...discussionFilters }
                            discussions={filteredDiscussions}
                            categories={this.props.categories}
                            tags={this.props.tags}
                            start={ params => { this.props.startDiscussion(params); this.setState({ isModalOpen: false }) } }
                            join={ params => this.props.joinDiscussion(params) }
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
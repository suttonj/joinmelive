import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Header from './Explore/Header';
import DiscussionsList from './Explore/DiscussionsList';
import StartDiscussionModal from './Explore/StartDiscussionModal';
import LoadingSpinner from './Explore/LoadingSpinner';
import ActiveFilters from './Explore/ActiveFilters';

import * as actionCreators from '../actions';

import './react-select.css';

export class ExplorePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.props.getCategories();
        this.props.getDiscussions();
        this.props.getTags();
    }

    render() {
        const { filtered: filteredDiscussions, filters: discussionFilters } = this.props.discussions;
        const selectedCategoryName = discussionFilters.categoryId ?
            this.props.categories.filter(cat => cat.id === discussionFilters.categoryId)[0].name :
            '';
        return (
            <div style={styles.container}>
                
                <Header
                    search={this.props.search}
                    tags={this.props.tags}
                    updateSelectedTags={this.props.updateSelectedTags}
                    selectedTagIds={discussionFilters.tagIds}
                    categories={this.props.categories}
                    selectedCategoryId={discussionFilters.categoryId}
                    selectCategory={this.props.selectCategory} 
                    startDiscussion={ () => this.setState({ isModalOpen: true }) }
                />

                <ActiveFilters
                    discussionCount={filteredDiscussions.length}
                    query={discussionFilters.query}
                    categories={this.props.categories}
                    selectedCategoryId={discussionFilters.categoryId}
                    selectCategory={this.props.selectCategory} />

                <div style={styles.discussionsContainer}>

                    <DiscussionsList 
                        discussions={filteredDiscussions}
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } />
                
                </div> 

                <Modal
                    isOpen={this.state.isModalOpen}
                    style={styles.modal}
                    onRequestClose={ () => this.setState({ isModalOpen: false }) }>
                {this.state.isModalOpen && 
                    <StartDiscussionModal
                        { ...discussionFilters }
                        subject={discussionFilters.query}
                        tagNames={discussionFilters.tagIds.map(id => this.props.tags.filter(tag => tag.id === id)[0].name)}
                        categories={this.props.categories}
                        tags={this.props.tags}
                        start={ params => { this.props.startDiscussion(params); this.setState({ isModalOpen: false }) } }
                        close={ () => this.setState({ isModalOpen: false }) } />
                }
                </Modal>

            </div>
        );
    
}}

export default connect(
    state => state,
    actionCreators
)(ExplorePage)

const styles = {
    container: {
        display: 'flex',
        flexDirection:'column',
        backgroundColor:'#444444',
        color:'white',
        minHeight: '100%'
    },
    discussionsContainer: {
        position:'relative',
        minHeight: 200,
        width: 1000,
        margin: 'auto',
        marginTop: 25,
        backgroundColor:'#2b2b2b',
        borderRadius:5,
        boxShadow:'0 0 11px 1px #111',
    },
    modal: {
        content:{
            top: `calc(50% - 0.5 * 242px)`,
            left: 'calc(50% - 0.5 * 342px)',
            width:300,
            height:200,
        },
    }, 
};
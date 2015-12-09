import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Header from './Explore/Header';
import CategoriesList from './Explore/CategoriesList';
import DiscussionsList from './Explore/DiscussionsList';
import StartDiscussionModal from './Explore/StartDiscussionModal';
import LoadingSpinner from './Explore/LoadingSpinner';

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
                    selectCategory={this.props.selectCategory} />

                <div style={styles.discussionsContainer}>
                {this.props.ajax.getDiscussions ?
                    <LoadingSpinner /> :
                    <DiscussionsList 
                        categoryName={selectedCategoryName}
                        discussions={filteredDiscussions}
                        startDiscussion={ () => this.setState({ isModalOpen: true }) }
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } />
                }
                </div> 

                <Modal
                    isOpen={this.state.isModalOpen}
                    style={styles.modal}
                    onRequestClose={ () => this.setState({ isModalOpen: false }) }>
                {this.state.isModalOpen && 
                    <StartDiscussionModal
                        { ...discussionFilters }
                        tagNames={discussionFilters.tagIds.map(id => this.props.tags.filter(tag => tag.id === id)[0].name)}
                        categories={this.props.categories}
                        tags={this.props.tags}
                        start={ params => { this.props.startDiscussion(params); this.setState({ isModalOpen: false }) } }
                        close={ () => this.setState({ isModalOpen: false }) } />
                }
                </Modal>

            </div>
        );
    }
}

export default connect(
    state => state,
    actionCreators
)(ExplorePage)

const styles = {
    container: {
        display: 'flex',
        flexDirection:'column',
        height:'100%',
        backgroundColor:'#444444',
        color:'white',
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
        overflow: 'scroll',
    },
    modal: {
        content:{
            width:500,
            height:500,
        },
    },
};
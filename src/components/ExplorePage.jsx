import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Select from 'react-select';

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

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    render() {
        const { filtered: filteredDiscussions, filters: discussionFilters } = this.props.discussions;
        const selectedCategoryName = discussionFilters.categoryId ?
            this.props.categories.filter(cat => cat.id === discussionFilters.categoryId)[0].name :
            '';
        return (
            <div style={styles.container}>
                <div style={styles.headerContainer}>
                    <img src='img/jm-logo.svg' style={styles.logo} />
                    <div style={styles.searchContainer}>
                        <input
                            type="text"
                            ref="searchInput"
                            placeholder="Search"
                            onKeyUp={ e => this.props.search(e.target.value) } />
                    </div>
                    <div style={styles.tagsContainer}>
                    {this.props.ajax.getTags ?
                        <LoadingSpinner /> :
                        <Select
                            multi={true}
                            value={discussionFilters.tagIds.join(',')}
                            delimiter=","
                            options={this.props.tags.map(tag => ({ value: tag.id, label: tag.name }))}
                            onChange={this.props.updateSelectedTags} />
                    }
                    </div>                        
                </div>             
                <div style={styles.mainContainer}>                        
                    <div style={styles.categoriesContainer}>
                    {this.props.ajax.getCategories ?
                        <LoadingSpinner /> :
                        <CategoriesList 
                            categories={this.props.categories}
                            selectedCategoryId={discussionFilters.categoryId}
                            selectCategory={this.props.selectCategory} />
                    }
                    </div>   
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
    container: {display: 'flex',flexDirection:'column',height:'100%',backgroundColor:'#444444',color:'white'},
    headerContainer: {display:'flex',position:'relative',padding:'10 25%',backgroundColor:'#2b2b2b',boxShadow:'0 0 11px 1px #111'},
    logo: {width:100,height:100},
    searchContainer: {flexGrow:1},
    tagsContainer: {flexGrow:1},
    mainContainer: {display:'flex'},
    categoriesContainer: {flexGrow:1,border:'1px solid red',position:'relative'},
    discussionsContainer: {flexGrow:4,position:'relative',backgroundColor:'#2b2b2b',borderRadius:5,margin:10,boxShadow:'0 0 11px 1px #111'},
    modal: {content:{width:500,height:500}},
};
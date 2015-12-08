import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import CategoriesList from './Explore/CategoriesList';
import DiscussionsList from './Explore/DiscussionsList';
import StartDiscussionModal from './Explore/StartDiscussionModal';

import * as actionCreators from '../actions';

export class ExplorePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.props.getCategories();
        this.props.getDiscussions();
    }

    render() {
        const { filtered: filteredDiscussions, filters: discussionFilters } = this.props.discussions;
        return (
            <div style={{display: 'flex',height:'100%'}}>
                <CategoriesList 
                    style={{flexGrow:1,border:'1px solid red'}}
                    categories={this.props.categories}
                    selectedCategoryId={discussionFilters.categoryId}
                    selectCategory={this.props.selectCategory} />
                <div style={{flexGrow:4,flexBasis:0,display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid green'}}>
                        <input
                            type="text"
                            placeholder="Search"
                            onKeyUp={ e => this.props.search(e.target.value) } />
                    </div>
                    <DiscussionsList 
                        style={{flexGrow:1,border:'1px solid blue'}}
                        discussions={filteredDiscussions}
                        startDiscussion={ () => this.setState({ isModalOpen: true }) } />
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    style={{content:{width:500,height:500}}}
                    onRequestClose={ () => this.setState({ isModalOpen: false }) }>
                {this.state.isModalOpen && 
                    <StartDiscussionModal
                        selectedCategoryId={discussionFilters.categoryId}
                        categories={this.props.categories}
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
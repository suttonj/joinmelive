import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Select from 'react-select';

import CategoriesList from './Explore/CategoriesList';
import DiscussionsList from './Explore/DiscussionsList';
import StartDiscussionModal from './Explore/StartDiscussionModal';

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
        return (
            <div style={{display: 'flex',height:'100%'}}>
                <CategoriesList 
                    style={{flexGrow:1,border:'1px solid red'}}
                    categories={this.props.categories}
                    selectedCategoryId={discussionFilters.categoryId}
                    selectCategory={this.props.selectCategory} />
                <div style={{flexGrow:4,flexBasis:0,display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid green',display:'flex'}}>
                        <input
                            type="text"
                            placeholder="Search"
                            onKeyUp={ e => this.props.search(e.target.value) } />
                        <Select
                            multi={true}
                            value={discussionFilters.tagIds.join(',')}
                            delimiter=","
                            options={this.props.tags.map(tag => ({ value: tag.id, label: tag.name }))}
                            onChange={this.props.updateSelectedTags} />
                    </div>
                    <DiscussionsList 
                        style={{flexGrow:1,border:'1px solid blue'}}
                        discussions={filteredDiscussions}
                        startDiscussion={ () => this.setState({ isModalOpen: true }) }
                        joinDiscussion={ viewerCode => this.props.joinDiscussion(viewerCode) } />
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    style={{content:{width:500,height:500}}}
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
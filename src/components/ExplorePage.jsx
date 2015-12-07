import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Explore/Menu';
import DiscussionsList from './Explore/DiscussionsList';

import * as actionCreators from '../actions';

export class ExplorePage extends Component {
    constructor(props) {
        super(props);

        this.props.getCategories();
        this.props.getDiscussions();
    }

    render() {
        return (
            <div style={{display: 'flex',height:'100%'}}>
                <Menu 
                    style={{flexGrow:1,border:'1px solid red'}}
                    categories={this.props.categories}
                    selectedCategoryId={this.props.filters.categoryId}
                    selectCategory={this.props.selectCategory} />
                <div style={{flexGrow:4,flexBasis:0,display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid green'}}>
                        <input type="text" placeholder="Search" />
                    </div>
                    <DiscussionsList 
                        style={{flexGrow:1,border:'1px solid blue'}}
                        discussions={this.props.discussions} />
                </div>
            </div>
        );
    }
}

export default connect(
    state => state,
    actionCreators
)(ExplorePage)
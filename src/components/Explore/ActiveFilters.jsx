import React, { Component } from 'react';
import CategoriesList from './CategoriesList';

export default class ActiveFilters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };


        this.getQuery = this.getQuery.bind(this);
    }

    getQuery() {
        return this.props.query ?
            <span> about <span style={{color:'#f88300'}}>{this.props.query}</span></span> :
            null;

    }

    render() {
        return (
            <div>
            {this.props.activeViewerCode ?
                <div style={{width:1000,margin:'auto',marginTop:25,marginBottom:0}}>
                    <span onClick={this.props.leaveDiscussion} style={{color:'#f88300',fontWeight:'bold',cursor:'pointer'}}>&lt; Leave discussion</span>
                </div> :
                <div style={{width:1000,margin:'auto',marginTop:25,marginBottom:0,display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <span>
                            {this.props.discussionCount} active discussions{this.getQuery()}
                        </span>
                    </div>
                    <div>
                        <CategoriesList
                            selectedCategoryId={this.props.selectedCategoryId}
                            categories={this.props.categories}
                            selectCategory={this.props.selectCategory} />
                    </div>
                </div>
            }
            </div>
        );
    }
}
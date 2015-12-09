import React, { Component } from 'react';

export default class ActiveFilters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.getCategory = this.getCategory.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    getQuery() {
        return this.props.query ?
            <span> about <span style={{color:'#f88300'}}>{this.props.query}</span></span> :
            null;

    }

    getCategory() {
        return this.props.selectedCategoryId && this.props.categories.length ?
            this.props.categories.filter(cat => cat.id === this.props.selectedCategoryId)[0].name : 
            'category';
    }

    selectCategory(id) {
        this.setState({ isOpen: false });
        this.props.selectCategory(id);
    }

    render() {
        return (
            <div style={{width:1000,margin:'auto',marginTop:25,marginBottom:0,display:'flex',justifyContent:'space-between'}}>
                <div>
                    <span>
                        {this.props.discussionCount} active discussions{this.getQuery()}
                    </span>
                </div>
                <div style={{position:'relative'}}
                    onMouseOver={ () => this.setState({ isOpen: true }) }
                    onMouseOut={ () => this.setState({ isOpen: false }) }>
                    <span style={{color:'#f88300',borderBottom:'1px solid #f88300'}}>
                        {this.getCategory()} ▼
                    </span>
                    <div style={{position:'absolute',zIndex:1000,backgroundColor:'black',display:this.state.isOpen ? 'block' : 'none'}}>
                        <div onClick={ () => this.selectCategory(null) }>{'<none>'}</div>
                    {this.props.categories.map(cat =>
                        <div onClick={ () => this.selectCategory(cat.id) }>{cat.name}</div>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}
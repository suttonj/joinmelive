import React, { Component, PropTypes } from 'react';
import Category from './Category';

export default class CategoriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            hoveredCategoryId: null,
        };

        this.getCategory = this.getCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
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
            <div style={{position:'relative',cursor:'pointer'}}
                onMouseOver={ () => this.setState({ isOpen: true }) }
                onMouseOut={ () => this.setState({ isOpen: false }) }>
                <span style={{color:'#f88300',borderBottom:'1px solid #f88300'}}>
                    {this.getCategory()} <span style={{fontSize:'0.75em'}}>▼</span>
                </span>
                <div style={{position:'absolute',right:0,zIndex:1000,borderRadius:5,backgroundColor:'black',display:this.state.isOpen ? 'block' : 'none',padding:10,textAlign:'center',boxShadow:'0 0 11px 1px #111'}}>
                    <div onClick={ () => this.selectCategory(null) } style={{color:'#9bd000',paddingTop:5}}><i>clear</i></div>
                {this.props.categories.map(cat =>
                    <div
                        style={{paddingTop:5,color:this.state.hoveredCategoryId === cat.id && '#F88300'}}
                        key={cat.id}
                        onClick={ () => this.selectCategory(cat.id) }
                        onMouseOver={ () => this.setState({ hoveredCategoryId: cat.id }) }
                        onMouseOut={ () => this.setState({ hoveredCategoryId: null }) }>
                        {cat.name}
                    </div>
                )}
                </div>
            </div>
        );
    }
}

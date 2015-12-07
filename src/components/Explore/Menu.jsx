import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.onClickParentCategory = this.onClickParentCategory.bind(this);        
    }

    onClickParentCategory(id) {
        this.props.selectCategory(id);

    }

    render() {
        return (
            <div style={this.props.style}>
            {this.props.categories.map(category => 
                <MenuItem
                    { ...category }
                    isOpen={category.id === this.props.selectedCategoryId}
                    onClick={ categoryId => this.props.selectCategory(categoryId) } />
            )}
            </div>
        );
    }
}

Menu.propTypes = {
    style: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        subCategories: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })).isRequired,
    })).isRequired,
    selectedCategoryId: PropTypes.number.isRequired,
    selectCategory: PropTypes.func.isRequired,
};
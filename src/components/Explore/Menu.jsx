import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.onClickParentCategory = this.onClickParentCategory.bind(this);
        this.isMenuItemOpen = this.isMenuItemOpen.bind(this);
    }

    onClickParentCategory(id) {
        this.props.selectCategory(id);
    }

    isMenuItemOpen(category) {
        return category.id === this.props.selectedCategoryId ||
            category.subCategories.some(sub => sub.id === this.props.selectedCategoryId);
    }

    render() {
        return (
            <div style={this.props.style}>
            {this.props.categories.map(category => 
                <MenuItem
                    key={category.id}
                    { ...category }
                    isOpen={this.isMenuItemOpen(category)}
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
    selectedCategoryId: PropTypes.number,
    selectCategory: PropTypes.func.isRequired,
};
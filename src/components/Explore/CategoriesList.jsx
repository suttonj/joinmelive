import React, { Component, PropTypes } from 'react';
import Category from './Category';

export default class CategoriesList extends Component {
    constructor(props) {
        super(props);

        this.selectCategory = this.selectCategory.bind(this);
        this.isMenuItemOpen = this.isMenuItemOpen.bind(this);
    }

    selectCategory(id) {
        if (this.props.selectedCategoryId !== id) {
            this.props.selectCategory(id);
        } else {
            this.props.selectCategory(null);
        }
    }

    isMenuItemOpen(category) {
        return category.id === this.props.selectedCategoryId ||
            category.subCategories.some(sub => sub.id === this.props.selectedCategoryId);
    }

    render() {
        return (
            <div>
            {this.props.categories.map(category => 
                <Category
                    key={category.id}
                    { ...category }
                    selectedCategoryId={this.props.selectedCategoryId}
                    isOpen={this.isMenuItemOpen(category)}
                    onClick={ categoryId => this.selectCategory(categoryId) } />
            )}
            </div>
        );
    }
}

CategoriesList.propTypes = {
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
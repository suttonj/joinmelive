import React, { Component, PropTypes } from 'react';

import MenuCategory from './MenuCategory';

export default class Menu extends Component {
    render() {
        const categories = this.props.categories.map((category, i) => 
            <MenuCategory key={i} category={category} />);

        return (
            <div style={this.props.style}>
                <div>Nav Menu</div>
                {categories}
            </div>
        );
    }
}

Menu.propTypes = {
    style: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        subCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};
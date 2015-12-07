import React, { Component, PropTypes } from 'react';

export default class MenuCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.category.name}
                {this.props.category.subCategories.map(sub => <li>{sub}</li>)}
            </ul>
        );
    }
}

MenuCategory.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        subCategories: PropTypes.array,
    }).isRequired,
};
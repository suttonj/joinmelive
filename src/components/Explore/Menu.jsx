import React, { Component, PropTypes } from 'react';

import MenuCategory from './MenuCategory';

const MENU_ITEMS = [
    {
        name: 'Politics',
        subCategories: [
            'placid',
            'brown',
            'cross',
            'furniture',
            'fireman',
        ],
    },
    {
        name: 'Music',
        subCategories: [
            'lackadaisical',
            'double',
            'snail',
            'troubled',
            'oafish',
        ],
    },
    {
        name: 'Games',
        subCategories: [
            'husky',
            'crib',
            'woozy',
            'sniff',
            'hallowe',
        ],
    },
    {
        name: 'Sports',
        subCategories: [
            'orange',
            'identify',
            'draconian',
            'match',
            'clover',
        ],
    },
    {
        name: 'News',
        subCategories: [
            'jail',
            'sophisticated',
            'encourage',
            'fang',
            'believe',
        ],
    },
    {
        name: 'Science',
        subCategories: [
            'airplane',
            'harm',
            'scold',
            'courageous',
            'jolly',
        ],
    },
    {
        name: 'Technology',
        subCategories: [
            'volcano',
            'camera',
            'perfect',
            'prick',
            'worm',
        ],
    },
];

export default class Menu extends Component {
    render() {
        const categories = MENU_ITEMS.map((category, i) => 
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
};
import { combineReducers } from 'redux';

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

function categories(state=[], action) {
    return MENU_ITEMS;
}

const DISCUSSIONS = [
    {
        subject: 'placid',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'brown',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'cross',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'furniture',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'fireman',
        screenshot: 'http://lorempixel.com/200/200/',
    },
    {
        subject: 'volcano',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'camera',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'perfect',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'prick',
        screenshot: 'http://lorempixel.com/200/200',
    },
    {
        subject: 'worm',
        screenshot: 'http://lorempixel.com/200/200',
    },
];

function discussions(state=[], action) {
    return DISCUSSIONS;
}

export default combineReducers({
    categories,
    discussions,
});
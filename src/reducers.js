import { combineReducers } from 'redux';

function categories(state=[], action) {
    switch(action.type) {
        case 'UPDATE_CATEGORIES':
            return action.categories;
        default:
            return state;
    }
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
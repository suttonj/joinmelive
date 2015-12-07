import { combineReducers } from 'redux';

function categories(state=[], action) {
    switch (action.type) {
        case 'UPDATE_CATEGORIES':
            return action.categories;
        default:
            return state;
    }
}

function discussions(state=[], action) {
    switch (action.type) {
        case 'UPDATE_DISCUSSIONS':
            return action.discussions;
        default:
            return state;
    }
}

export default combineReducers({
    categories,
    discussions,
});
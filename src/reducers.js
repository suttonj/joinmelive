import { combineReducers } from 'redux';

const filtersInitialState = {
    query: '',
    categoryId: null,
    tagIds: [],
};

function filters(state=filtersInitialState, action) {
    switch (action.type) {
        case 'UPDATE_QUERY':
            return { ...state, query: action.query };
        case 'UPDATE_SELECTED_CATEGORY':
            return { ...state, categoryId: action.categoryId };
        case 'UPDATE_SELECTED_TAGS':
            return { ...state, tagIds: action.tagIds };
        default:
            return state;
    }
}

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
    filters,
    categories,
    discussions,
});
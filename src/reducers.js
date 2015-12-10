import { combineReducers } from 'redux';
import Fuse from 'fuse.js';

function categories(state=[], action) {
    switch (action.type) {
        case 'UPDATE_CATEGORIES':
            return action.categories;
        default:
            return state;
    }
}

function filterDiscussions(all, filters) {
    const categoryIds = filters.categoryId ? [filters.categoryId, ...filters.childCategoryIds] : [];
    const filtered = all
        .filter(disc => !categoryIds.length || categoryIds.indexOf(disc.categoryId) > -1)
        .filter(disc => !filters.tagIds.length || disc.tags.some(tag => filters.tagIds.indexOf(tag.id) > -1))

    return filters.query ? (new Fuse(filtered, { keys: ['subject'] })).search(filters.query) : filtered;
}

const filtersInitialState = {
    query: '',
    categoryId: null,
    childCategoryIds: [],
    tagIds: [],
    activeViewerCode: null,
};
function discussions(state={all:[], filtered:[], filters: filtersInitialState}, action) {
    switch (action.type) {
        case 'UPDATE_DISCUSSIONS': {
            const filtered = filterDiscussions(action.discussions, state.filters);
            return { ...state, all: action.discussions, filtered }
        }
        case 'UPDATE_QUERY': {
            const filters = { ...state.filters, query: action.query };
            const filtered = filterDiscussions(state.all, filters);
            return { ...state, filtered, filters };
        }
        case 'UPDATE_SELECTED_CATEGORY': {
            const filters = { ...state.filters, categoryId: action.categoryId, childCategoryIds: action.childCategoryIds };
            const filtered = filterDiscussions(state.all, filters);
            return { ...state, filtered, filters };
        }
        case 'UPDATE_SELECTED_TAGS': {
            const filters = { ...state.filters, tagIds: action.tagIds };
            const filtered = filterDiscussions(state.all, filters);
            return { ...state, filtered, filters };
        }
        case 'JOIN_DISCUSSION': {
            return { ...state, activeViewerCode: action.viewerCode };
        }
        case 'LEAVE_DISCUSSION': {
            return { ...state, activeViewerCode: null };
        }
        default:
            return state;
    }
}

function tags(state=[], action) {
    switch (action.type) {
        case 'UPDATE_TAGS':
            return action.tags;
        default:
            return state;
    }
}

function trends(state=[], action) {
    switch (action.type) {
        case 'UPDATE_TRENDS':
            return action.trends;
        default:
            return state;
    }
}

function ajax(state={getCategories:false,getDiscussions:false,getTags:false,startDiscussion:false}, action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, getCategories: !state.getCategories };
        case 'GET_DISCUSSIONS':
            return { ...state, getDiscussions: !state.getDiscussions };
        case 'GET_TAGS':
            return { ...state, getTags: !state.getTags };
        case 'GET_TRENDS':
            return { ...state, getTrends: !state.getTrends };
        case 'START_DISCUSSION':
            return { ...state, startDiscussion: !state.startDiscussion };
        default:
            return state;
    }
}

export default combineReducers({
    categories,
    discussions,
    tags,
    trends,
    ajax,
});
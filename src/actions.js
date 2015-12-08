import {
    API_HOST,
    PAPI_HOST,
    PAPI_AUTH,
} from './constants';

export function getCategories() {
    return async dispatch => {
        const response = await fetch(API_HOST + '/category')
        const categoriesJson = await response.json();

        const subCategoriesJson = await Promise.all(categoriesJson.map(async category => {
            const subResponse = await fetch(API_HOST + '/category?parentCategoryId=' + category.id);
            return await subResponse.json();
        }));

        const categories = categoriesJson.map((category, i) => {
            category.subCategories = subCategoriesJson[i];
            return category;
        });

        dispatch({ type: 'UPDATE_CATEGORIES', categories });
    };
}

export function getDiscussions({ categoryId=null, tagIds=[], maxResults=20, q='' }={}) {
    return async dispatch => {
        const queryString = `?categoryId=${categoryId}&tagIds=${tagIds.join(',')}&maxResults=${maxResults}&q=${q}`;
        const response = await fetch(API_HOST + '/discussion' + queryString);
        const discussions = await response.json();
        
        dispatch({ type: 'UPDATE_DISCUSSIONS', discussions });
    };
}

export function getTags() {
    return async dispatch => {
        const response = await fetch(API_HOST + '/tag');
        const tags = await response.json();

        dispatch({ type: 'UPDATE_TAGS', tags });
    };
}

export function selectCategory(categoryId) {
    return async dispatch => {
        const response = await fetch(API_HOST + '/category?parentCategoryId=' + categoryId);
        const childCategories = await response.json();

        const childCategoryIds = childCategories.map(child => child.id);

        dispatch({ type: 'UPDATE_SELECTED_CATEGORY', categoryId, childCategoryIds });
    };
}

export function search(query) {
    return { type: 'UPDATE_QUERY', query };
}

export function updateSelectedTags(tagIds) {
    return { type: 'UPDATE_SELECTED_TAGS', tagIds: tagIds ? tagIds.split(',').map(Number) : [] };
}

export function startDiscussion({ subject, categoryId, tagNames: tags }) {
    return async dispatch => {
        const papiResponse = await fetch(PAPI_HOST + '/meetings/start', {
            method: 'POST',
            headers: { authorization: PAPI_AUTH },
            body: JSON.stringify({}),
        });
        const json = await papiResonse.json();
        const viewerCode = json.audioConference.conferenceId;
        
        const body = { subject, viewerCode, categoryId, tags };
        const response = await fetch(API_HOST + '/discussion', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        dispatch({ type: 'START_DISCUSSION', ...body });
    };
}

export function joinDiscussion(viewerCode) {
    window.open('https://jmmaster.dev.3amlabs.net/' + viewerCode + '?suppressSticky=true');
    return { type: 'JOIN_DISCUSSION', viewerCode };
}

import {
    API_HOST,
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
    return async (dispatch, getState) => {
        const queryString = `?categoryId=${categoryId}&tagIds=${tagIds.join(',')}&maxResults=${maxResults}&q=${q}`;
        const response = await fetch(API_HOST + '/discussion' + queryString);
        const discussions = await response.json();
        
        dispatch({ type: 'UPDATE_DISCUSSIONS', discussions });
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

export function addTag(tagIds) {
    return { type: 'UPDATE_TAGS', tagIds };
}

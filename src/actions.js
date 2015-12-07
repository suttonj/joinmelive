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
    }
}

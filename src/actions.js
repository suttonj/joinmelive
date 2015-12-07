import {
    API_HOST,
} from './constants';

export function getCategories() {
    return dispatch => {
        fetch(API_HOST + '/category')
            .then(res => res.json())
            .then(categoriesJson => {
                const proms = categoriesJson.map(category => 
                    new Promise((resolve, reject) => 
                        fetch(API_HOST + '/category?parentCategoryId=' + category.id)
                            .then(res => res.json())
                            .then(subCategoriesJson => resolve(subCategoriesJson)))
                );

                Promise.all(proms).then(subCategoriesJson => {
                    const categories = categoriesJson.map((category, i) => {
                        category.subCategories = subCategoriesJson[i];
                        return category;
                    });

                    dispatch({ type: 'UPDATE_CATEGORIES', categories });
                });
            });
    }
    // return async dispatch => {
    //     const response = await fetch(API_HOST + '/category');
    //     const categoriesJson = await response.json();
    //     const subCategoriesJson = await* categoriesJson.map(async category => {
    //         const subResponse = await fetch(API_HOST + '/category?parentCategoryId=' + category.id);
    //         const subCategories = await subResponse.json();
    //         return subCategories;
    //     });

    //     const categories = categoriesJson.map((category, i) => {
    //         category.subCategories = subCategoriesJson[i];
    //         return category;
    //     });

    //     dispatch({ type: 'UPDATE_CATEGORIES', categories });
    // };
}
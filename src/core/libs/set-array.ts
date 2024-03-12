import type { Categories, Items } from "../interfaces/commerce.interface";

export const setCategoriesArray = (categories: Categories) => {
    return Object.entries(categories).map(([id, category]) => ({
        id,
        ...category,
    }));
};

export const setItemsArray = (items: Items) => {
    return Object.entries(items).map(([id, item]) => ({
        id,
        ...item,
    }));
};

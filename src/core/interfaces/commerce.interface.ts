export interface Commerce {
    id: string;
    name: string;
    description: string;
    portada: string;
    profile: string;
	categories: Categories;
	items: Items;
	active: boolean;
	workspace: string;
}

export type Items = {
    [key: string]: Item;
}

export type Categories = {
    [key: string]: Category;
}

export interface Category {
	name: string;
}

export interface Item {
    name: string;
    description: string;
    price: number;
    active: boolean;
    category: string;
}
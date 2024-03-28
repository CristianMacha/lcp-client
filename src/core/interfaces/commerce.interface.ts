export interface Commerce {
    name: string;
    description: string;
    portada: string;
    profile: string;
	categories: Categories;
	items: Items;
	active: boolean;
	workspace: string;
    premium: boolean;
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
    _id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    active: boolean;
    category: string;
}
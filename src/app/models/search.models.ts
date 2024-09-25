export interface Category {
    id: number,
    name: string;
    stores: Store[];
}

export interface Store {
    id: number;
    name: string;
}
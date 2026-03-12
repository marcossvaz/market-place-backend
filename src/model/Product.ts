import type {ProductSize} from "../model/SizeProduct.js"

export interface Product {
    id?: string;
    name: string;
    description?: string | null;
    photo?: string | null;
    active?: boolean;
    size?: ProductSize[];

    created_at?: any | null;
    updated_at?: any | null;
}



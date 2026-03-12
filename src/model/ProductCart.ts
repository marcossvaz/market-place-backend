export interface ProductCart {
    id?: string;
    id_cart: string ;
    id_product: string;
    id_size: string;
    quantity: number;

    created_at?: Date | null;
    updated_at?: Date | null;
}
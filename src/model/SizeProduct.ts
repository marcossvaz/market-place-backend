export interface ProductSize {
    id?: string;
    id_product?: string;
    name: string;

    width: boolean;
    height: boolean;
    length: boolean;
    weight: boolean;
    quantity: boolean;
    insurance_value: boolean

    quantity_stock: number;
    price_of: number;
    price_for: number;
    active: boolean;
    main: boolean;

    created_at?: Date | null;
    updated_at?: any | null;
}
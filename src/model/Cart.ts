export interface Cart {
    id?: string;
    
    id_client?: string | null;
    id_visitors?: string | null;
    active?: boolean;

    created_at?: Date | null;
    updated_at?: Date | null;
}
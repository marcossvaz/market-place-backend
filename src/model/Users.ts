export interface User {
    id?: string;
    
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
    city?: string | null;
    street?: string | null;
    state?: string | null;
    road?: string | null;
    number?: string | null;
    complement?: string | null; 

    active?: boolean;

    created_at?: any;
    updated_at?: any;
}
export interface User {
    id?: string;
    
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;

    created_at?: any;
    updated_at?: any;
}
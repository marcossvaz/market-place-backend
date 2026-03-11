import type { Cart } from "../model/Cart.js";
import { CartRepository } from "../repository/CartRepository.js";
import type { ProductCartRepository } from "../repository/ProductCartRepository.js";


interface Icart {
    id_product: string;
    id_size: string;
    quantity: number;
}

export class CartService {

    constructor(
        private cartRepository: CartRepository,
        private productCartRepository: ProductCartRepository
    ) {}

    async add(data: Icart, typeUser: string, id: string) {

        let dataCart: Cart | null = null; 
        
        if(typeUser === 'visitante') {
            dataCart = await this.cartRepository.getVisitors(id);
        }

        if(typeUser === 'cliente') {
            dataCart = await this.cartRepository.getByIdUser(id)
        }

        if(!dataCart) {

            let dataCreateCart: Cart = {};

            if(typeUser === 'visitante') {
                const dataCreateCart = {
                    id_visitors:id
                };
            }

            if(typeUser === 'client') {
                const dataCreateCart = {
                    id_client: id
                }
            }

            dataCart = await this.cartRepository.createCart(
                dataCreateCart
            )
        }
    };
}
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

        const getProductInCart = await this.productCartRepository.getbyIdCart(
            data.id_product, 
            data.id_size
        );

        // create a cart of product if not exist OR uptade product of cart ----> ProductCartRepository
        if(!getProductInCart) {
            await this.productCartRepository.add({
                id_cart: dataCart.id as string,
                id_size: data.id_size,
                id_product: data.id_product,
                quantity: data.quantity
            });
        } else {
            const newQuantity = getProductInCart.quantity + Number(data.quantity);
            const presentQuantity = getProductInCart.productSize.quantity_stock;

            // varify a quantity of product in stock
            if(newQuantity > presentQuantity) {
                throw new Error(`Existe apenas ${presentQuantity}, desse produto`);
            }

            await this.productCartRepository.updateCart(getProductInCart.id as string,{quantity: newQuantity} as any);
        }
    };
}
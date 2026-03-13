import type { Cart } from "../model/Cart.js";
import { CartRepository } from "../repository/CartRepository.js";
import type { ProductCartRepository } from "../repository/ProductCartRepository.js";
import type { ProductSizeRepository } from "../repository/ProductSizeRepository.js";


interface Icart {
    id_product: string;
    id_size: string;
    quantity: number;
}

export class CartService {

    constructor(
        private sizeRepository: ProductSizeRepository,
        private cartRepository: CartRepository,
        private productCartRepository: ProductCartRepository
    ) {}


    async getByUser(typeUser: string, idClient: string) {

        let dataCart = null;

        if(typeUser === 'cliente') {
            dataCart = await this.cartRepository.getByIdUser(idClient);
        }

        if(typeUser === 'visitante') {
            dataCart === await this.cartRepository.getVisitors(idClient);
        }

        if(!dataCart) {
            throw new Error("Por favor, adiciona um produto para criar")
        }

        
    }

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
                dataCreateCart = {
                    id_visitors:id
                };
            }

            if(typeUser === 'cliente') {
                dataCreateCart = {
                    id_client: id
                }
            }

            dataCart = await this.cartRepository.createCart(
                dataCreateCart
            )
        }

        console.log("typeUser", typeUser);
        console.log("id", id)

        const getProductInCart = await this.productCartRepository.getbyIdCart(
            data.id_product, 
            data.id_size
        );

        // create a cart of product if not exist OR uptade product of cart ----> ProductCartRepository
        if(!getProductInCart) {

            const dataSize = await this.sizeRepository.getById(data.id_size);
            

            if(dataSize?.quantity_stock as number < Number(data.quantity)) {
                throw new Error("Não a essa quantidade no estoque");
            }

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

        return {message: "Produto adicionado ao carrinho"}
    };
}
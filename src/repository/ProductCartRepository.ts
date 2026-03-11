import { prismaInstanceFactory } from "../factories/prismaFactory.js";

export class ProductCartRepository {
    async getbyIdCart(idCart: string, idSize: string) {
        return prismaInstanceFactory.productCart.findFirst({
            where: {
                id_cart: idCart,
                id_size: idSize
            }
        })
    }
}
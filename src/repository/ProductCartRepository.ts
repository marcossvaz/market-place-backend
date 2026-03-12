import { prismaInstanceFactory } from "../factories/prismaFactory.js";
import type { ProductCart } from "../model/ProductCart.js";

export class ProductCartRepository {
    async getbyIdCart(idCart: string, idSize: string) {
        return prismaInstanceFactory.productCart.findFirst({
            where: {
                id_cart: idCart,
                id_size: idSize
            },
            include: {
                productSize : true
            }
        });
    }

    async add(products: ProductCart) {
        return prismaInstanceFactory.productCart.create({
            data: products
        })
    }

    async updateCart(id: string, data: ProductCart) {
        return prismaInstanceFactory.productCart.update({
            where: { id: id },
            data: { ...data }
        })
    }
}
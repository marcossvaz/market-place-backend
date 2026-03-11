import { prismaInstanceFactory } from "../factories/prismaFactory.js";
import type { Cart } from "../model/Cart.js";

export class CartRepository {

    async getByIdUser(idUser: string) {
        return await prismaInstanceFactory.cart.findFirst({
            where: {
                id: idUser,
                active: true
            }
        })
    }

    async getVisitors(idIsValid: string) {
        return await prismaInstanceFactory.cart.findFirst({
            where: {
                id: idIsValid,
                active: true
            }
        })
    }

    async createCart(data: Cart) {
        return await prismaInstanceFactory.cart.create({
            data: {
                ...data
            }
        })
    }
}
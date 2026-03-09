import { prismaInstanceFactory } from "../factories/prismaFactory.js";
import type { Product } from "../model/Product.js";

export class ProductRepository {
    
    async create(data: Product) {
        return await prismaInstanceFactory.product.create({
            data: data
        });
    }

    async getAll() {
        return await prismaInstanceFactory.product.findMany({
            where: {
                active: true
            },
            include: {
                size: true
            }
        });
    }

    async getById(id: string) {
        return await prismaInstanceFactory.product.findFirst({
            where: {
                id,
                active: true
            }
        })
    }
}
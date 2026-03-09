import { prismaInstanceFactory } from "../factories/prismaFactory.js";
import type { Product } from "../model/Product.js";

export class ProductRepository {
    

    async create(data: Product) {
        return await prismaInstanceFactory.product.create({
            data: data
        })
    }
}
import { ProductRepositoryFactory } from "../factories/productRepositoryFactory.js";
import type { Product } from "../model/Product.js";
import type { ProductRepository } from "../repository/ProductRepository.js";

export class ProductService  {

    constructor(private readonly productRepository: ProductRepository) {}

    async create(data: Product) {
        return await this.productRepository.create(data);
    }

    async getAll() {
        const result =  await this.productRepository.getAll();

        return {
            result
        }
    }

    async getById(id: string) {
        const prodcut = await this.productRepository.getById(id)
        return prodcut;
    }
}
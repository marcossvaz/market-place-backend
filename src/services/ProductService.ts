import { ProductRepositoryFactory } from "../factories/productRepositoryFactory.js";
import type { Product } from "../model/Product.js";

export class ProductService  {
    async create(data: Product) {
        return await ProductRepositoryFactory.create(data);
    }
}
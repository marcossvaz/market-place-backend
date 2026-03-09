import { ProductService } from "../services/ProductService.js";
import { ProductRepositoryFactory } from "./productRepositoryFactory.js";


export const ProductServiceFactory = new ProductService(
    ProductRepositoryFactory
);

import { CartService } from "../services/CartService.js";
import { CartRepositoryactory } from "./CartRepositoryFactory.js";
import { ProductCartRepositoryFactory } from "./ProductCartRepositoryFactory.js";
import { ProductSizeRepositoryFactory } from "./productSizeRepositoryFactory.js";

export const CartServiceFactory = new CartService(
    ProductSizeRepositoryFactory,
    CartRepositoryactory,
    ProductCartRepositoryFactory,
    
);

import { CartService } from "../services/CartService.js";
import { CartRepositoryactory } from "./CartRepositoryFactory.js";
import { ProductCartRepositoryFactory } from "./ProductCartRepositoryFactory.js";

export const CartServiceFactory = new CartService(
    CartRepositoryactory,
    ProductCartRepositoryFactory
);

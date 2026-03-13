import { Router} from "express";
import { UserController } from "../controller/UserController.js";
import { LoginController } from "../controller/LoginController.js";
import { ProductController } from "../controller/ProductController.js";
import { AuthCartMiddleware } from "../controller/middlewares/authCartMiddleware.js";
import { CartController } from "../controller/CartController.js";


export const routes = Router();

const userRouteController = new UserController();
const loginRouteController = new LoginController();
const productRouteController = new ProductController();
const authCartMiddleware = new AuthCartMiddleware();
const cartRoutesControlelr = new CartController();


// routes of user ---------------------------
routes.post('/users', userRouteController.create);


// routes of login --------------------------
routes.post('/login', loginRouteController.execute);


// routes of product ------------------------
routes.post('/products', productRouteController.create);
routes.get('/products', productRouteController.getAll);
routes.get('/products/:id', productRouteController.getById);


// routes of cart --------------------------- (Interection client)
routes.post('/products/cart', authCartMiddleware.cart, cartRoutesControlelr.add);
routes.get('/cart', authCartMiddleware.cart, cartRoutesControlelr.get);
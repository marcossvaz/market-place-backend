import { Router} from "express";
import { UserController } from "../controller/UserController.js";
import { LoginController } from "../controller/LoginController.js";
import { ProductController } from "../controller/ProductController.js";


export const routes = Router();

const userRouteController = new UserController();
const loginRouteController = new LoginController();
const productRouteController = new ProductController();

// routes of user ---------------------------
routes.post('/users', userRouteController.create);


// routes of login --------------------------
routes.post('/login', loginRouteController.execute);


// routes of product ------------------------
routes.post('/products', productRouteController.create);
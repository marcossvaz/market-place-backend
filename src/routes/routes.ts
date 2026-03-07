import { Router} from "express";
import { UserController } from "../controller/UserController.js";
import { LoginController } from "../controller/LoginController.js";


export const routes = Router();

const userRouteController = new UserController();
const loginRouteController = new LoginController();

// routes of user ---------------------------
routes.post('/users', userRouteController.create);


// routes of login --------------------------
routes.post('/login', loginRouteController.execute);
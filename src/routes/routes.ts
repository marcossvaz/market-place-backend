import { Router} from "express";
import { UserController } from "../controller/UserController.js";


export const routes = Router();

const userRouteController = new UserController();


// routes of user ---------------------------
routes.post('/users', userRouteController.create);


// routes of login --------------------------
routes.post('/login', )
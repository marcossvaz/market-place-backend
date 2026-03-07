import { LoginService } from "../services/LoginService.js";
import { userRepositoryFactory } from "./userRepositoryFactory.js";

export const loginServiceFactory = new LoginService(
    userRepositoryFactory
);

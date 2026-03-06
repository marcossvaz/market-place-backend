import type { Request, Response } from "express";
import { UserSchema } from "./schemas/UserSchema.js";
import { userServiceFactory } from "../factories/userServicesFactories.js";

export class UserController {
    
    async create(req: Request, res: Response) {

        try {
            const user =  UserSchema.parse(req.body);

            const result = await userServiceFactory.create(user);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({error: err.message});
        }
    }
}
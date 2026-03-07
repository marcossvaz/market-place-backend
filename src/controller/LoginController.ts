import type { Request, Response } from "express";
import { loginSchema } from "./schemas/LoginSchema.js";
import { loginServiceFactory } from "../factories/loginServiceFactory.js";



export class LoginController {
    async execute(req: Request, res: Response) {
        try {
            const verifyLogin = loginSchema.parse(req.body);
            
            const result =  await loginServiceFactory.execute(verifyLogin);

            res.status(201).json(result);
        } catch(err: any) {
            res.status(401).json({error: err.messagem})
        }
    }
}
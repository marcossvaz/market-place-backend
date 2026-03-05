import type { Request, Response } from "express";

export class UserController {
    
    async create(req: Request, res: Response) {
        try {
            
        } catch (err: any) {
            res.status(400).json({error: err.message});
        }
    }
}
import type { Request, Response } from "express";
import { ShippingServiceFactory } from "../factories/ShippingServiceFactory.js";

export class ShippingController {
    async calculate(req: Request, res: Response) {
        try {
            
            const result = await ShippingServiceFactory.calculate();

            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }
}
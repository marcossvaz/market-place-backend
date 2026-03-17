import type { Request, Response } from "express";
import { ShippingServiceFactory } from "../factories/ShippingServiceFactory.js";

export class ShippingController {
    async calculate(req: Request, res: Response) {
        try {
            const destinationCep =  req.body.cep;
            const visitorId =  req.headers.visitor as string;
            const userId = (req as any).id_user;

            const result = await ShippingServiceFactory.calculate(destinationCep, visitorId, userId);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }
}
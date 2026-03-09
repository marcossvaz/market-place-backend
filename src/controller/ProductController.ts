import type { Request, Response } from "express";
import { productSchema } from "./schemas/ProductSchema.js";
import { ProductServiceFactory } from "../factories/productServiceFactory.js";

export class ProductController {
    async create(req: Request, res: Response){
        try {
            const body = productSchema.parse(req.body);

            const result = await ProductServiceFactory.create(body);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({error: err.message});
        }
    }
}
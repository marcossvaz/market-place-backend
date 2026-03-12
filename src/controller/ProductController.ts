import type { Request, Response } from "express";
import { productSchema, type IProduct } from "./schemas/ProductSchema.js";
import { ProductServiceFactory } from "../factories/productServiceFactory.js";

export class ProductController {
    async create(req: Request, res: Response){
        try {
            const body: IProduct = productSchema.parse(req.body);

            const result = await ProductServiceFactory.create(body);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({error: err.message});
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const result = await ProductServiceFactory.getAll();

            res.status(201).json(result);
        } catch(err: any) {
            res.status(401).json({errir: err.message});
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const product = req.params.id;

            if(!product) throw new Error('Produto não encontrado');

            const result = await ProductServiceFactory.getById(product as string);

            res.status(201).json(result);
        } catch (err: any) {    
            res.status(401).json({error: err.emessage});
        }
    }
}
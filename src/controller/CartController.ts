import type { Request, Response } from "express";
import { CartServiceFactory } from "../factories/CarServiceFactory.js";

export class CartController {
    async add(req: Request, res: Response) {
      try {

        const authCart = req.headers.authorization;
      
        if(!authCart) {
          //* work with id_visitors
          const valueBody = req.body;
          const isVisitor = req.headers.visitor as string;
          const result = await CartServiceFactory.add(valueBody, 'visitante', isVisitor);
          
          return res.status(201).json(result);
        }
      
      
        //* work with token 
        const valueBody = req.body;
        const isUser = (req as any).id_user
        const result = await CartServiceFactory.add(valueBody, 'cliente', isUser);
        
        res.status(201).json(result);
      } catch (err: any) {
        res.status(401).json({error: err.message});
      }
    }
}
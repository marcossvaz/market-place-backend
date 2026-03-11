import type { NextFunction, Request, Response } from "express";
import { validateJwt } from "../../services/helpers/jwtHelpers.js";

export class AuthCartMiddleware {

    async cart(req: Request, res: Response, next: NextFunction) {

        try {

            if (req.headers.authorization) {
                const token = req.headers.authorization?.split(' ');

                const dataUser: any = validateJwt(token[1] as string);

                (req as any).ud_user = dataUser.id;

                next();
                return;
            }

        next();
        return;
        } catch(err: any) {
            res.status(401).json({error: "Jwt expirado"});
        }
    }
}
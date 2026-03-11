import jwt from "jsonwebtoken";
import type { User } from "../../model/Users.js";

export const createJWT = (data: User) => {
    return jwt.sign(data, process.env.JWT_SECRET as string, {
        expiresIn: '5h'
    });
}

export const extractJwt = (token: string) => {
    return jwt.decode(token);
}

export const validateJwt = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string);
}

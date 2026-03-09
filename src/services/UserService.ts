import { userRepositoryFactory } from "../factories/userRepositoryFactory.js";
import type { User } from "../model/Users.js";
import { hashCodeCreate } from "./helpers/bcryptHelpers.js";
import { createJWT } from "./helpers/jwtHelpers.js";

export class UserServices {
    async create(data: User) {

        const resultEmail = await userRepositoryFactory.getbyEmail(data.email);

        if(resultEmail) {
            throw new Error("Esse email já existe");
        }
        
        //* create hash code
        const createHash = await hashCodeCreate(data.password);
        data.password = createHash;
        
        const result = await userRepositoryFactory.create(data);
        result.password = '';
        
        //? create a token
        const jwt = createJWT(result);

        // result
        return {
            result,
            token: jwt
        }
    }

    async getbyEmail(emailUser: string) {
        
    }

}
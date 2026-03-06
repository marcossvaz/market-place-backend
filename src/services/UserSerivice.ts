import { userRepositoryFactory } from "../factories/userRepositoryFactory.js";
import type { User } from "../model/Users.js";

export class UserServices {
    async create(data: User) {
        try {

            const resultEmail = await userRepositoryFactory.getbyEmail(data.email)

            if(resultEmail) {
                throw new Error("Esse email já existe");
            }

            const result = await userRepositoryFactory.create(data);

        } catch (err: any) {

        }
    }

    async getbyEmail(emailUser: string) {
    }

}
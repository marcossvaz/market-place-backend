import { prismaInstanceFactory } from "../factories/prismaFactory.js";
import type { User } from "../model/Users.js";

export class UserRepository {
    async create(data: User) {
        return prismaInstanceFactory.user.create({
            data
        });
    }

    async getbyEmail(emailUser: string) {
        return prismaInstanceFactory.user.findFirst({
            where: {
                email: emailUser
            }
        })
    }

    async getbyCpf(cpfUser: string) {
        return prismaInstanceFactory.user.findFirst({
            where: {
                cpf: cpfUser
            }
        })
    }
}
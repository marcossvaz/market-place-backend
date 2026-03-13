import { prismaInstanceFactory } from "../factories/prismaFactory.js";

export class ProductSizeRepository {
    async getById(idSize: string) {
        return await prismaInstanceFactory.productSize.findFirst({
            where: {id: idSize}
        })
    }
}
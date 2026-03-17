import dotenv from 'dotenv';
import type { BestCourierService } from './BestCourierService.js';
import type { CartService } from './CartService.js';

dotenv.config();

export class ShippingService {

    constructor(
        private bestCourierServiceFactory: BestCourierService,
        private cartService: CartService
    ) {}

    async calculate(cep_Destitation: string, idVisitor: string, idClient: string) {

        const cepDestitation = cep_Destitation.replace('-', '');
        
        const dataCart = idClient
            ? await this.cartService.getByUser('cliente', idClient)
            : await this.cartService.getByUser('visitante', idVisitor)

        return await this.bestCourierServiceFactory.calculate(cepDestitation, dataCart);
    }
};

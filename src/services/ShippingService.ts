import dotenv from 'dotenv';
import type { BestCourierService } from './BestCourierService.js';

dotenv.config();

export class ShippingService {

    constructor(private bestCourierServiceFactory: BestCourierService) {}

    async calculate() {
        return await this.bestCourierServiceFactory.calculate();
    }
};

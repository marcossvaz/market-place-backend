import { ShippingService } from "../services/ShippingService.js";
import { BestCourierServiceFactory } from "./BestCourierServiceFactory.js";
import { CartServiceFactory } from "./CarServiceFactory.js";

export const ShippingServiceFactory = new ShippingService(
    BestCourierServiceFactory,
    CartServiceFactory
)
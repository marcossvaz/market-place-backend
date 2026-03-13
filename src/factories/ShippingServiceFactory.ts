import { ShippingService } from "../services/ShippingService.js";
import { BestCourierServiceFactory } from "./BestCourierServiceFactory.js";

export const ShippingServiceFactory = new ShippingService(
    BestCourierServiceFactory
)
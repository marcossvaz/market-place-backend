import z, { string } from "zod";

export const productSchema = z.object({
    name: z.string(),
    description: z.string().nullable().optional(),
    photo: z.string().nullable().optional(),
    size: z.array(z.object({
        name: z.string(),
        quantity_stock: z.number(),
        price_of: z.number(),
        price_for: z.number(),
        active: z.boolean(),
        main: z.boolean()
    })).optional()
});


export type IProduct = z.infer<typeof productSchema>;
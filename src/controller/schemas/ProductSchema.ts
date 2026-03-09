import z, { string } from "zod";

export const productSchema = z.object({
    name: z.string("Obrigatório o nome do produto"),
    description: z.string(),
});
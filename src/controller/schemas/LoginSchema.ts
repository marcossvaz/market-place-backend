import z, { email } from "zod";


export const loginSchema = z.object({
    email: z.email("Email obrigatório"),
    password: z.string("Senha onrigatório"),
})
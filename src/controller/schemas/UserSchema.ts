import z, { email, optional } from "zod";

//*Generic schema
const nullLableString = z.string().optional().nullable().default(null);

export const UserSchema = z.object({
    name: z.string('o nome é obrigatório'),
    email: z.email('Email obrigatório'),
    password: z.string("Senha obrigatória"),
    phone: z.string("Valor requerido"),
    cpf: z.string("Cpf obrigatório"),

    city: nullLableString,
    street: nullLableString,
    state: nullLableString,
    road: nullLableString,
    number: nullLableString,
    complement: nullLableString
})
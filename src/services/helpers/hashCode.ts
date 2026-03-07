import bcrypt from "bcrypt";

export const hashCodeCreate = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 6);
}
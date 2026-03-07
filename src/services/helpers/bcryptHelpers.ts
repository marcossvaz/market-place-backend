import bcrypt from "bcrypt";

export const hashCodeCreate = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 6);
}

export const comparePassword = async (passwordFormulary: string, password: string) => {
    return bcrypt.compare(passwordFormulary, password);
}
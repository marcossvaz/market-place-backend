import type { UserRepository } from "../repository/UserRepository.js";
import { comparePassword, hashCodeCreate } from "./helpers/bcryptHelpers.js";
import { createJWT } from "./helpers/jwtHelpers.js";

interface ILogin  {
    email: string;
    password: string;
}

export class LoginService {

    constructor(private readonly userIntanceRepository: UserRepository) {}

    async execute(data: ILogin) {
       const dataClient = await this.userIntanceRepository.getbyEmail(data.email);

       if(!dataClient) throw new Error("Senha ou email inválido");

       const isValidatedPasswordClient = await comparePassword(data.password, dataClient.password);

       if(!isValidatedPasswordClient) throw new Error("Senha ou email inválido");

       dataClient.password = '';

       const token = createJWT(dataClient);

       return {
        dataClient,
        token
       }
    }
}
import { secret } from "../services/AuthenticateUserService";
import { verify } from "jsonwebtoken"


export const verifyToken = (token: string) => {
    return verify(token, secret);
};

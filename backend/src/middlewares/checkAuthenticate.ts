import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { secret } from "../services/AuthenticateUserService";

interface IPayload {
    sub: string
}
export async function checkAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        })
    }

    //split do token
    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, secret) as IPayload
        request.userId = sub;

        return next()

    } catch (err) {
        return response.status(401).json({
            message: "invalid Token!"
        })
    }
}

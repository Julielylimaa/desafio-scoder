import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

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


    const [, token] = authHeader.split(" ")

    if (!process.env.JWT_SECRET) {
        throw new Error("Secret not set.")
    }

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        request.userId = sub;

        return next()

    } catch (err) {
        return response.status(401).json({
            message: "invalid Token!"
        })
    }
}

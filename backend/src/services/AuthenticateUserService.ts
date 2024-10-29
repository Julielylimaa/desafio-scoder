import { prisma } from "../../prisma/prismaClient"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

interface IAuthenticateUser {
    email: string,
    password: string
}
export const secret = process.env.JWT_SECRET || "123";

export class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUser) {
        //verificar se cadastrado
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            throw new Error("Email or Password invalid!")
        }
        //verificar senha email
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email or Password invalid!")
        }
        //gerar token
        const token = sign({ email }, secret, {
            subject: user.id,
            expiresIn: '1d'
        })
        const data = {
            id: user.id,
            email: user.email,
            token
        }

        return data;
    }
}
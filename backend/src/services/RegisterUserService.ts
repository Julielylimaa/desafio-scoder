import { response } from "express";
import { prisma } from "../database/prismaClient";
import { hash } from "bcrypt"
interface IRegisterUser {
    name: string;
    email: string;
    password: string;
}

export class RegisterUser {
    async execute({ name, email, password }: IRegisterUser) {
        //validar

        const userExist = await prisma.user.findFirst({
            where: {
                email: {
                    mode: "insensitive"
                }
            }
        })

        if (userExist) {
            throw new Error("User already exists.")
        }
        //Criptografar

        const hashPassword = await hash(password, 10)
        //Salvar
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
            }
        })
        return user;
    }


}
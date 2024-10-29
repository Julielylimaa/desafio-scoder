import { Request, Response } from "express";
import { RegisterUser } from "../services/RegisterUserService";

export class RegisterUserController {
    async handle(request: Request, response: Response) {

        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(400).json({ error: 'A required field is missing.' });
        }

        try {
            const registerUser = new RegisterUser();
            const result = await registerUser.execute({
                name,
                email,
                password
            })
            return response.json(result)
        } catch (error: any) {
            response.status(400).send({ message: error.message });
        }

    }
}
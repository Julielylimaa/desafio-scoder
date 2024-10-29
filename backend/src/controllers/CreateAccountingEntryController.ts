import { CreateAccountingEntry } from "../services/CreateAccountingEntryService"
import { Request, Response } from "express"
export class CreateAccountingEntryController {
    async handle(request: Request, response: Response) {
        const { date, userId, description, value, type } = request.body

        const createAccountingEntry = new CreateAccountingEntry()

        const entry = await createAccountingEntry.execute({
            date,
            userId,
            description,
            value,
            type
        })

        return response.json(entry)
    }
}
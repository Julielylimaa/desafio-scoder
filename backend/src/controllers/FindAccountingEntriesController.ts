import { FindAccountingEntries } from "../services/FindAccountingEntriesService";
import { Request, Response } from "express";
export class FindAccountingEntriesController {
    async handle(request: Request, response: Response) {
        const { userId } = request
        const { date, page, pageSize } = request.body
        const findAccountingEntries = new FindAccountingEntries()

        const result = await findAccountingEntries.execute(
            userId,
            date,
            page,
            pageSize
        )


        return response.json(result)

    }
}
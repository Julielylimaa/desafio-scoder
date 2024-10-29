import { AccountingEntryType } from "@prisma/client";
import { prisma } from "../../prisma/prismaClient";
import { response } from "express";

interface IAccountingEntry {
    date: Date,
    userId: string,
    description: string,
    value: number,
    type: AccountingEntryType
}

export class CreateAccountingEntry {
    async execute({ date, userId, description, value, type }: IAccountingEntry) {
        if (!userId) {
            return response.status(400).json({ error: "User ID is required." });
        }
        const accountingEntry = await prisma.accountingEntry.create({
            data: {
                date,
                userId,
                description,
                value,
                type
            }
        })
        return accountingEntry
    }
}
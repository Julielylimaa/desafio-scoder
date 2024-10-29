import { prisma } from "../../prisma/prismaClient";

export class FindAccountingEntries {
    async execute(id: string, date: string, page: number, pageSize: number) {
        const [month, year] = date.split('/').map(Number)
        const skip = (page - 1) * pageSize

        const groupEntriesByType = await prisma.accountingEntry.groupBy({
            by: ['type'],
            where: {
                userId: {
                    equals: id
                },
                date: {
                    gte: new Date(year, month - 1, 1),
                    lt: new Date(year, month, 1)
                }
            },
            _sum: {
                value: true,
            }
        })

        const totalCreditValue = groupEntriesByType.find(group => group.type === 'Credit')?._sum.value
        const totalDebitValue = groupEntriesByType.find(group => group.type === 'Debit')?._sum.value

        const entries = await prisma.accountingEntry.findMany({
            where: {
                userId: {
                    equals: id
                },
                date: {
                    gte: new Date(year, month - 1, 1),
                    lt: new Date(year, month, 1)
                }
            },
            skip: skip,
            take: pageSize,
            orderBy: {
                date: 'desc',
            }
        })
        if (entries.length === 0) {
            return { message: "No data available for this date." }
        }


        return { entries, totalCreditValue, totalDebitValue }
    }
}
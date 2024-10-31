import { api } from "../axios";

type Entries = {
    id: string;
    date: string;
    description: string;
    type: 'Credit' | 'Debit';
    value: number;
    createdAt: string;
    userId: string;
};

interface GetAccountingRecordsResult {
    entries: Entries[];
    totalCredit: number;
    totalDebit: number;
}
export const getAccountingRecords = async (date: string,
    page: number,
    pageSize: number): Promise<GetAccountingRecordsResult | null> => {
    try {
        const resp = await api.get("accounting", {
            params: {
                date,
                page,
                pageSize
            }
        })
        const entries: Entries[] = resp.data.entries
        const totalCredit: number = resp.data.totalCreditValue
        const totalDebit: number = resp.data.totalDebitValue
        // console.log(entries, totalCredit, totalDebit)
        return { entries, totalCredit, totalDebit }
    } catch (err) {
        console.log(err)
        return null;
    }
}

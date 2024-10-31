import { api } from "../axios";

interface Props {
    date: string,
    page?: number,
    pageSize?: number,
}

export const getAccountingRecords = async (params: Props) => {
    try {
        const resp = await api.get("accounting", {
            params,
        })
        console.log(resp)
        return resp
    } catch (err) {
        console.log(err)
        alert("Algo deu errado!")
        return err;
    }
}

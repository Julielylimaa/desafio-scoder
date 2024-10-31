import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    responseType: "json",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});



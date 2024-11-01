import axios from "axios";



export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    responseType: "json",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});


api.interceptors.request.use(
    (config) => {
        const token = `Bearer ${localStorage.getItem('token')}`
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    },

)

import { api } from "../axios";

export const handleLogin = async (email: string, password: string) => {
    try {
        await api
            .post("login", {
                email,
                password,
            })
            .then((resp) => {
                localStorage.setItem("token", resp.data);
                return true
            });
    } catch (err) {
        console.log(err)
        alert("Algo deu errado!")
        return err;
    }
}

export const handleRegister = async (name: string, email: string, password: string) => {
    try {
        await api
            .post("user/", {
                name,
                email,
                password,
            })
            .then((resp) => {
                console.log(resp.data);
                localStorage.setItem("token", resp.data.token);
            });
    } catch (err) {
        console.log(err);
    }
}
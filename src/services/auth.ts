import { Login } from "@/interfaces/Login";
import { Register } from "@/interfaces/Register";
import { instance } from "./axios";

export const login = async (loginDto: Login) => {

}

export const signup = async (registerDto: Register) => {
    const response = await instance.post("/auth/register", registerDto)
    return response.data
}
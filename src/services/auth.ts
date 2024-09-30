import { LoginDto } from "@/interfaces/Login";
import { RegisterDto } from "@/interfaces/Register";
import { instance } from "./axios";

export const login = async (loginDto: LoginDto) => {
    const response = await instance.post("/auth/login", loginDto)
    setToken(response.data.token)
    return response.data
}

export const signup = async (registerDto: RegisterDto) => {
    const response = await instance.post("/auth/register", registerDto)
    return response.data
}

function setToken(token: string) {
    localStorage.setItem("token", token)
}
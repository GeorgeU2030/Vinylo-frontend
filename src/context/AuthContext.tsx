import { AuthContextType } from "@/interfaces/AuthContextType";
import { User } from "@/interfaces/User";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const loginContext = (userData: User) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };
    
    const logoutContext = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    )
    
}
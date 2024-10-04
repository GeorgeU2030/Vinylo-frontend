import { User } from "./User";

export interface AuthContextType {
    user: User | null;
    loginContext: (userData: User) => void;
    logoutContext: () => void;
}
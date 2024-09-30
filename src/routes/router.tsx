import { createBrowserRouter } from "react-router-dom";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home";
import ProtectedRoute from "./security/ProctetedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <SignUp />
    },
    {
        path: "/home",
        element: <ProtectedRoute element={<Home />} />
    }
]);

export default router;
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    element: React.ReactNode
}

const ProtectedRoute = ({element}: ProtectedRouteProps) => {
    const token = localStorage.getItem("token")
    if (!token) {
        return <Navigate to="/login" />
    }
    return element
}

export default ProtectedRoute
import { validateToken } from "@/services/auth"
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    element: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await validateToken(token);
          console.log(response)
          if (response == "isValid") {
            setIsAuthenticated(true);
            console.log("is authenticated")
          } else {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      };
      checkToken();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{element}</>;
};

export default ProtectedRoute;
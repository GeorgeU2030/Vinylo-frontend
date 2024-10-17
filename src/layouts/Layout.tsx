import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/interfaces/AuthContextType";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  menuActiveItem: string;
}

export default function Layout({children, menuActiveItem}:LayoutProps){
  const authContext = useContext<AuthContextType | null>(AuthContext);
  
  const { user, isLoading } = authContext!;
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (!user){
    return <Navigate to="/login" />
  }

  const getClassBackground = () => {
    if (menuActiveItem === "home") {
      return "bg-gradient-to-r from-slate-200 via-light to-slate-300";
    } else {
      return "bg-white";
    }
  }
  
  return (
    <div className={`min-h-screen w-full flex flex-col ${getClassBackground()}`}>
          <Menubar user={user} activeItem={menuActiveItem} />
          <div className="flex-grow overflow-x-hidden">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </div>
          <Footer />
    </div>
  )
  
}
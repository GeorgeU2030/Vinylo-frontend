import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/interfaces/AuthContextType";
import { useContext } from "react";

export default function Home() {
  const authContext = useContext<AuthContextType | null>(AuthContext);

  const { user } = authContext!
  return (
    <div className="bg-light h-screen flex flex-col">
      <Menubar/>
      <div className="flex-grow">
        {/* Content */}
      </div>
      <Footer/>
    </div>
  )
}

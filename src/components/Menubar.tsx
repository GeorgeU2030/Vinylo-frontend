import { User } from "@/interfaces/User"
import { useState } from "react";
import {Select, SelectItem} from "@nextui-org/select";
import { User as UserIcon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import '../css/home.css'


interface MenubarProps {
  user: User,
  activeItem?: string
}

export default function Menubar({user,activeItem}: MenubarProps) {

    // Menu options for mobile devices
  const options = [
    {key: "home", label: "Home"},
    {key: "explore", label: "Explore"},
    {key: "ranking", label: "Ranking"},
    {key: "awards", label: "Awards"},
    {key: "history", label: "History"}
  ]

  // States
  const [menu, setMenu] = useState<boolean>(false); 
  const [selected, setSelected] = useState<string>(options[0].key);

  // Navigation
  const navigate = useNavigate();

  // Toggle menu
  const toggleMenu = () => {
    setMenu(!menu);
  }

  // button active class
  const getButtonClass = (item: string) => {
    return item === activeItem
        ? 'button button-active'
        : 'button';
  };


  return (
    <nav className="flex items-center justify-between min-h-20 bg-gradient-to-r from-pomepinkdark to-pomeorange">
        <div className="flex items-center lg:px-2 cursor-pointer"
        onClick={()=>navigate('/home')}
        >
            <img src="pome.webp" className="w-10 h-10 mx-2 lg:mx-3" />
            <h1 className="font-bold text-base lg:text-xl text-white">
              PomeMusic
            </h1>
        </div>
        <div className="flex items-center lg:mr-12 mr-1 w-2/3 lg:w-2/5 justify-end ">
            <div className="hidden lg:flex gap-2">
                <button className={`rounded-lg cursor-pointer font-bold px-4 py-2 ${getButtonClass('explore')}`}
                    onClick={()=>navigate('/explore')}
                    type="button"
                >
                    Explore
                </button>
                <button className={`rounded-lg cursor-pointer font-bold px-4 py-2 ${getButtonClass('ranking')}`}>
                    Ranking
                </button>
                <button className={`rounded-lg cursor-pointer font-bold px-4 py-2 ${getButtonClass('awards')}`}>
                    Awards
                </button>
                <button className="rounded-lg px-2 py-2 cursor-pointer">
                    <img src="history.png" className="w-8 h-8"/>
                </button>
            </div>
            
            <div className="flex lg:hidden mr-4">
                <Select 
                    size="md"
                    defaultSelectedKeys={[options[0].key]}
                    onSelectionChange={(e) => setSelected(e.currentKey as string)}
                    className="w-32 md:w-44"
                >
                    {options.map((option) => (
                    <SelectItem key={option.key} isDisabled={selected === option.key}
                        onClick={()=>navigate(`/${option.key}`)}
                    >
                        {option.label}
                    </SelectItem>
                ))}
                </Select>
            </div>
            <div className="flex">
                <button className="rounded-full border-2 border-light" onClick={toggleMenu}>
                    <img src={user?.avatar} className="w-10 h-10 rounded-full" />
                </button>
                {menu && (
                    <div className="absolute right-2 mt-10 w-32 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1 rounded-lg" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="/profile" className="flex items-center px-4 py-2 text-sm text-center hover:bg-gray-100" role="menuitem">
                            <UserIcon className="mr-2 text-pome" /> Profile
                        </a>
                        <a href="/logout" className="flex items-center px-4 py-2 text-sm text-center hover:bg-gray-100" role="menuitem">
                                <LogOut className="mr-2 text-pome" /> Logout
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

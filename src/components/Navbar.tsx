export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 bg-light">
        <div className="flex items-center">
            <img src="pome.webp" className="w-10 h-10 mx-2 lg:mx-3" />
            <h1 className="font-bold text-xl bg-gradient-to-r from-pome via-pomepinkdark to-pomeorange bg-clip-text text-transparent">
              PomeMusic
            </h1>
        </div>    
        <div>
            <button className="bg-light mr-2 lg:mr-4 px-6 py-2 border-pomeorange border-2 rounded-lg text-pomedark font-bold hover:bg-pomepink hover:text-light">
              Login
            </button>
            <button className="bg-pomedark mr-2 lg:mr-4 px-4 py-2 border-pomeorange border-2 rounded-lg text-light font-bold hover:bg-pomepink hover:text-light">
              Sign Up
            </button>
        </div>
    </nav>
  )
}

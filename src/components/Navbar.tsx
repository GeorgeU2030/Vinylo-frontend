export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 bg-light">
        <div className="flex items-center">
            <img src="strawberry.png" className="w-12 h-12 mx-2 lg:mx-3" />
            <h1 className="font-bold text-xl bg-gradient-to-r from-strawberry via-cranberry to-blackberry bg-clip-text text-transparent">
              Berrytunes
            </h1>
        </div>    
        <div>
            <button className="bg-light mr-2 lg:mr-4 px-6 py-2 border-blueberry border-2 rounded-lg text-cherry font-bold hover:bg-raspberry hover:text-light">
              Login
            </button>
            <button className="bg-cherry mr-2 lg:mr-4 px-4 py-2 border-blackberry border-2 rounded-lg text-light font-bold hover:bg-raspberry hover:text-light">
              Sign Up
            </button>
        </div>
    </nav>
  )
}

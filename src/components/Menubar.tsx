export default function Menubar() {
  return (
    <nav className="flex items-center justify-between h-20 bg-gradient-to-r from-pomepinkdark to-pomeorange">
        <div className="flex items-center lg:px-2">
            <img src="pome.webp" className="w-10 h-10 mx-2 lg:mx-3" />
            <h1 className="font-bold text-xl text-white">
              PomeMusic
            </h1>
        </div>
        <div className="flex items-center lg:mr-12 w-1/3 justify-between">
            <div className="flex gap-2">
                <button className="rounded-lg cursor-pointer bg-light hover:bg-pomedark hover:text-light border-2 border-pomepeach hover:border-2 hover:border-light text-pome font-bold px-4 py-2">
                    Explore
                </button>
                <button className="rounded-lg cursor-pointer bg-light hover:bg-pomedark hover:text-light border-2 border-pomepeach hover:border-2 hover:border-light text-pome font-bold px-4 py-2">
                    Ranking
                </button>
                <button className="rounded-lg cursor-pointer bg-light hover:bg-pomedark hover:text-light border-2 border-pomepeach hover:border-2 hover:border-light text-pome font-bold px-4 py-2">
                    Awards
                </button>
                <button className="rounded-lg px-2 py-2 cursor-pointer">
                    <img src="history.png" className="w-8 h-8"/>
                </button>
            </div>
            <div className="flex">
                <button className="rounded-full">
                    <img src="pome.webp" className="w-8 h-8" />
                </button>
            </div>
        </div>
    </nav>
  )
}

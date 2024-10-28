import YoutubeComponent from "@/components/youtube/YoutubeComponent"
import { useLocation, useNavigate } from "react-router-dom"
import '../css/youtubeitem.css'

export default function YoutubeItem() {

    const navigate = useNavigate()
    const location = useLocation()
    const video = location.state?.video

    if(!video){
        return <div>
            Loading...
        </div>
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-300 to-graybasic">
            <nav
            className="h-20 bg-pome flex items-center"
            >
            <div className="flex items-center lg:px-2 cursor-pointer"
            onClick={()=>navigate('/home')}
            >
                <img src="pome.webp" className="w-10 h-10 mx-2 lg:mx-3" />
                <h1 className="font-bold lg:text-xl text-white">
                PomeMusic
                </h1>
            </div>
            </nav>
            <div className="flex flex-col flex-grow w-full bg-gradient-to-r from-orange-300 to-pomepeach items-center justify-center">
                {/*<h1 className="text-pomedark bg-light rounded-lg px-2 py-1 text-xl">{video.title}</h1>
                <button className={`flex font-bold items-center justify-center gap-2 px-6 py-2
                rounded-lg mb-4 btnclass`}
                onClick={()=>navigate('/explore')}
                >
                    Explore
                </button>*/}
                <YoutubeComponent videoId={video.id} />
                <div className="w-3/5 bg-light mt-2 rounded-lg flex justify-between border-2 border-pomeorange">
                    <h1 className="text-xl px-4 py-2">{video.title}</h1>
                    <div>
                    <button className={`flex font-bold items-center justify-center gap-2 px-6 py-2
                    rounded-lg mb-4 btnclass mt-2 mr-2`}
                    onClick={()=>navigate('/explore')}
                    >
                        Explore
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { getMainVideos } from "@/services/youtube"
import { useEffect, useState } from "react"

export default function YoutubeGrid() {

  const [videos, setVideos] = useState<any[]>([])

  useEffect(() => {
    fetchVideos()
  },[])

  const fetchVideos = async () => {
    try {
        const fetchedVideos = await getMainVideos()
        setVideos(fetchedVideos)
    } catch (error) {
        console.error('Error fetching the videos:', error);
    }
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col justify-center items-center border-2 border-pome rounded-lg h-96 lg:h-72 bg-light cursor-pointer">
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-90 object-cover" />
          <h3 className="mt-2 text-sm text-center mx-2">{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  )
}

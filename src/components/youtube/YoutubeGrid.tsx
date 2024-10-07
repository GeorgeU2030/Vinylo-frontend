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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {videos.map((video) => (
            <div key={video.id}>
                <h1>{video.id}</h1>
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </div>
        ))}
    </div>
  )
}

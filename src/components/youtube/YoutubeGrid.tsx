import { Video } from "@/interfaces/Video"
import { getChannelDetails, getMainVideos } from "@/services/youtube"
import { useEffect, useState } from "react"

export default function YoutubeGrid() {

  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    fetchVideos()
  },[])

  const fetchVideos = async () => {
    try {
        const fetchedVideos = await getMainVideos()
        const mappedVideos = await Promise.all(fetchedVideos.map(async (video: any) => {
          const channelId = video.snippet.channelId;
          const channelDetails = await getChannelDetails(channelId);
          const channelImage = channelDetails.snippet.thumbnails.default.url;

          return {
              id: video.id,
              title: video.snippet.title,
              description: video.snippet.description,
              thumbnail: video.snippet.thumbnails.high.url,
              channelTitle: video.snippet.channelTitle,
              channelImage 
          };
        }));
        setVideos(mappedVideos)
    } catch (error) {
        console.error('Error fetching the videos:', error);
    }
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col justify-center items-center border-2 border-pome py-2 rounded-lg bg-light cursor-pointer">
          <img src={video.thumbnail} alt={video.title} className="w-90 object-cover" />
          <div className="flex items-center justify-center mt-2">
            <img src={video.channelImage} alt={video.channelTitle} className="w-10 h-10 rounded-full" />
            <h3 className="mt-2 text-sm text-center mx-2">{video.channelTitle}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

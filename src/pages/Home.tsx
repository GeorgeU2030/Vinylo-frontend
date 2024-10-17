import CarouselComponent from "@/components/Carousel";
import YoutubeGrid from "@/components/youtube/YoutubeGrid";
import { Video } from "@/interfaces/Video";
import Layout from "@/layouts/Layout";
import { fiveVideos } from "@/services/youtube";
import { useEffect, useState } from "react";

export default function Home() {

  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    fiveVideos().then((apiVideos) => {
      const mappedVideos = apiVideos.map((video: any) => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.maxres.url,
        channelTitle: video.snippet.channelTitle,
        videoUrl: `https://www.youtube.com/embed/${video.id}`
      }));
      setVideos(mappedVideos);
    });
  }, []);

  return (
    <Layout menuActiveItem="home">
      <div className="flex justify-center">
        <CarouselComponent videos={videos} />
      </div>
      <YoutubeGrid />
    </Layout>
  )
}

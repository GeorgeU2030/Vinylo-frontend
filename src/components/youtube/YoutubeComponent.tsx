import YouTube, { YouTubeProps } from "react-youtube";
import { useState, useEffect } from "react";

export default function YoutubeComponent({ videoId }: { videoId: string }) {
  const [opts, setOpts] = useState<YouTubeProps['opts']>({
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 },
  });

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  
  useEffect(() => {
    const updatePlayerSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setOpts({
          height: '200',
          width: '320',
          playerVars: { autoplay: 1 },
        });
      } else if (width < 768) {
        setOpts({
          height: '300',
          width: '480',
          playerVars: { autoplay: 1 },
        });
      } else if (width < 1024) {
        setOpts({
          height: '390',
          width: '640',
          playerVars: { autoplay: 1 },
        });
      } else {
        setOpts({
          height: '480',
          width: '853',
          playerVars: { autoplay: 1 },
        });
      }
    };

    updatePlayerSize();
    window.addEventListener('resize', updatePlayerSize);

    return () => window.removeEventListener('resize', updatePlayerSize);
  }, []);

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

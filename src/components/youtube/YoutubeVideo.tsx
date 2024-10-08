import YouTube, { YouTubeProps } from 'react-youtube';

export default function YoutubeVideo() {

  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId="ViqIZXnBQeo" opts={opts} onReady={onPlayerReady} />;
}
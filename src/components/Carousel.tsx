import { Video } from '@/interfaces/Video';
import { Carousel } from 'react-bootstrap';
import { VideoDialog } from './ui/Herodialog';

interface CarouselProps {
  videos: Video[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ videos }: CarouselProps) => {
  return (
    <Carousel className='w-3/4'>
      {videos.map((video:Video)=>(
        <Carousel.Item key={video.id} interval={3000}>
            <VideoDialog videoSrc={video.videoUrl} thumbnailSrc={video.thumbnail} />
            <Carousel.Caption className='hidden sm:block'>
                <h3 className='bg-slate-300 text-pomedark rounded-lg text-base py-1 '>{video.title}</h3>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
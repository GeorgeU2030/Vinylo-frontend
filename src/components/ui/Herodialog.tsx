import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

interface VideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
}

export function VideoDialog({ videoSrc, thumbnailSrc }: VideoDialogProps) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

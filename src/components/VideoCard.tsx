import { Video } from '@/types/video';

type Props = {
  video: Video;
};

const VideoCard = ({ video }: Props) => {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
      <div className="aspect-video w-full bg-black">
        <video
          controls
          preload="metadata"
          className="h-full w-full"
          poster={video.thumbnail}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{video.title}</h3>
      </div>
    </article>
  );
};

export default VideoCard;

import { Video } from '@/types/video';

type Props = {
  video: Video;
};

const FeaturedVideo = ({ video }: Props) => {
  return (
    <section id="featured" className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Featured Project</h2>
      <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
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
          <h3 className="text-lg font-semibold">{video.title}</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;

import { Video } from '@/types/video';
import VideoCard from './VideoCard';

type Props = {
  videos: Video[];
};

const Portfolio = ({ videos }: Props) => {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Portfolio</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

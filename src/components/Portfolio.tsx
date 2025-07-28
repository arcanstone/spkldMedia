
import { Video } from '@/types/video';

type Props = {
  others: Video[];
};

const Portfolio = ({others}: Props)=>{
    return (<section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Portfolio</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {others.map((video) => (
            <article key={video.id} className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
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
          ))}
        </div>
      </section>);
}

export default Portfolio;
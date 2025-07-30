import React, { useState } from 'react';

// Define types
interface VideoPlayerProps {
  url: string;
  title: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
}

// VideoPlayer component
const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  return (
    <div className="aspect-video w-full">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p>Video not available</p>
        </div>
      )}
    </div>
  );
};

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Beachfront Property',
    description: 'A stunning walkthrough of this 5-bedroom beachfront estate with panoramic ocean views.',
    videoUrl: 'https://www.youtube.com/watch?v=eGxN_EXWpFw',
    thumbnail: 'https://i.ytimg.com/vi/eGxN_EXWpFw/maxresdefault.jpg',
    category: 'Luxury',
  },
  {
    id: 2,
    title: 'Modern Downtown Loft',
    description: 'Urban living at its finest in this renovated industrial loft with city skyline views.',
    videoUrl: 'https://www.youtube.com/watch?v=BTYAsjAVa3I',
    thumbnail: 'https://i.ytimg.com/vi/BTYAsjAVa3I/maxresdefault.jpg',
    category: 'Urban',
  },
  {
    id: 3,
    title: 'Countryside Estate',
    description: 'Tour this expansive 10-acre estate with custom-built main house and guest cottage.',
    videoUrl: 'https://www.youtube.com/watch?v=_KhqjKQje5s',
    thumbnail: 'https://i.ytimg.com/vi/_KhqjKQje5s/maxresdefault.jpg',
    category: 'Rural',
  },
  {
    id: 4,
    title: 'Waterfront Penthouse',
    description: 'Exclusive penthouse with 360-degree views and private rooftop terrace.',
    videoUrl: 'https://www.youtube.com/watch?v=2Gg6Seob5Mg',
    thumbnail: 'https://i.ytimg.com/vi/2Gg6Seob5Mg/maxresdefault.jpg',
    category: 'Luxury',
  },
  {
    id: 5,
    title: 'Historic Brownstone',
    description: 'Beautifully restored 19th century brownstone with original details and modern amenities.',
    videoUrl: 'https://www.youtube.com/watch?v=BTYAsjAVa3I',
    thumbnail: 'https://i.ytimg.com/vi/BTYAsjAVa3I/maxresdefault.jpg',
    category: 'Urban',
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    description: 'Secluded mountain home with breathtaking views and custom timber frame construction.',
    videoUrl: 'https://www.youtube.com/watch?v=_KhqjKQje5s',
    thumbnail: 'https://i.ytimg.com/vi/_KhqjKQje5s/maxresdefault.jpg',
    category: 'Rural',
  },
];

const categories = ['All', 'Luxury', 'Urban', 'Rural'] as const;

const Portfolio2: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full bg-stone-50 min-h-screen">      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-stone-900">
          Our Portfolio
        </h1>
        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
          Browse our collection of real estate videos showcasing properties of all types. 
          Click on any video to view the full walkthrough.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured video player */}
        {selectedVideo !== null && (
          <div className="mb-16">
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                url={portfolioItems.find(item => item.id === selectedVideo)?.videoUrl || ''}
                title={portfolioItems.find(item => item.id === selectedVideo)?.title || 'Video'}
              />
            </div>
            <div className="max-w-4xl mx-auto mt-6 px-4">
              <h2 className="text-2xl font-bold text-stone-900">
                {portfolioItems.find(item => item.id === selectedVideo)?.title}
              </h2>
              <p className="text-stone-600 mt-2">
                {portfolioItems.find(item => item.id === selectedVideo)?.description}
              </p>
            </div>
          </div>
        )}

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer group transform transition duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden bg-white"
              onClick={() => setSelectedVideo(item.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-stone-900 ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm mt-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-amber-700 mr-2"></span>
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">
              No properties found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-6 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
            >
              View all properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio2;
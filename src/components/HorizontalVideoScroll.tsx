"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Video } from '@/types/video';

type Props = {
  videos: Video[];
  title?: string;
};

const HorizontalVideoScroll = ({ videos, title = "Featured Properties" }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 640; // Width of one card plus gap (38rem + 2rem = 640px)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Create descriptions for the videos to match Goldman Sachs style
  const getVideoDescription = (video: Video) => {
    const descriptions: { [key: string]: string } = {
      "1": "Professional videography, premium showcases, and comprehensive marketing solutions for luxury real estate clients.",
      "2": "Cinematic walkthroughs, drone footage, and immersive experiences that highlight your property's best features.",
      "3": "Creative storytelling, expert editing, and cutting-edge technology to elevate your real estate listings."
    };
    return descriptions[video.id] || "Professional real estate videography services tailored to showcase your property's unique appeal.";
  };

  // Get real estate related images
  const getImageSrc = (video: Video) => {
    const images: { [key: string]: string } = {
      "1": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=350&fit=crop&crop=center",
      "2": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=350&fit=crop&crop=center",
      "3": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=350&fit=crop&crop=center",
      "4": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=350&fit=crop&crop=center",
      "5": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=350&fit=crop&crop=center",
      "6": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=350&fit=crop&crop=center",
      "7": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=350&fit=crop&crop=center",
      "8": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&h=350&fit=crop&crop=center",
      "9": "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=350&fit=crop&crop=center",
      "10": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=350&fit=crop&crop=center"
    };
    return images[video.id] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=350&fit=crop&crop=center";
  };

  return (
    <section className="py-20 bg-stone-50" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Goldman Sachs Style */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-6xl font-normal" style={{
            fontFamily: 'var(--font-merriweather)',
            lineHeight: '1'
          }}>{title}</h2>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {videos.map((video) => (
              <div 
                key={video.id}
                className="flex-none w-[38rem] group cursor-pointer bg-white shadow-sm"
              >
                {/* Large Image */}
                <div className="aspect-[3.8/2.3] w-full bg-black overflow-hidden mb-6">
                  <img
                    src={getImageSrc(video)}
                    alt={video.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Below Image */}
                <div className="p-4 space-y-4">
                  <h3 className="text-2xl font-bold text-black leading-tight" style={{
                    fontFamily: 'var(--font-merriweather)'
                  }}>
                    {video.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed" style={{
                    fontFamily: 'var(--font-merriweather)'
                  }}>
                    {getVideoDescription(video)}
                  </p>
                  
                  {/* Arrow Indicator */}
                  <div className="pt-2">
                    <ArrowRight className="w-7 h-7 text-black group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation and Portfolio Button Row */}
          <div className="flex justify-between items-center mt-6">
            {/* Left spacer */}
            <div className="flex-1"></div>
            
            {/* Centered Portfolio Button */}
            <div className="flex-1 flex justify-center">
              <a
                href="/portfolio"
                className="inline-flex items-center px-8 py-3 border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-merriweather)'
                }}
              >
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-3" />
              </a>
            </div>
            
            {/* Navigation Arrows - Right aligned */}
            <div className="flex-1 flex justify-end">
              <div className="flex space-x-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-16 h-16 rounded-full text-gray-600 hover:text-black transition-all duration-200 flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-16 h-16 rounded-full text-gray-600 hover:text-black transition-all duration-200 flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HorizontalVideoScroll;
"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Video } from '@/types/video';

type Props = {
  videos: Video[];
  title?: string;
};

const HorizontalVideoScroll = ({ videos, title = "Delivering for Our Clients" }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 608; // Width of one card plus gap (36rem + 2rem = 608px)
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

  return (
    <section className="py-20 bg-white" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Goldman Sachs Style */}
        <div className="mb-16">
          <h2 className="text-4xl font-normal text-black mb-8">{title}</h2>
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
                className="flex-none w-[36rem] group cursor-pointer"
              >
                {/* Large Image */}
                <div className="aspect-[4/3] w-full bg-black overflow-hidden mb-8">
                  <video
                    preload="metadata"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    poster={video.thumbnail}
                    muted
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                
                {/* Content Below Image */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-black leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {getVideoDescription(video)}
                  </p>
                  
                  {/* Arrow Indicator */}
                  <div className="pt-3">
                    <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Goldman Sachs Style (Bottom Right) */}
          <div className="flex justify-end mt-6">
            <div className="flex space-x-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full text-gray-600 hover:text-black transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full text-gray-600 hover:text-black transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/portfolio"
            className="inline-flex items-center px-8 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4 ml-3" />
          </a>
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
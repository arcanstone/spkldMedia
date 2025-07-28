'use client';

import { useState } from 'react';
import FeaturedVideo from '@/components/FeaturedVideo';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Video } from '@/types/video';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Luxury Condo Tour – Downtown Toronto    ',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // <-- replace with your CDN url
    featured: true,
  },
  {
    id: '2',
    title: 'Modern Family Home – Mississauga',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: '3',
    title: 'Penthouse Walkthrough – Yorkville',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
];

export default function Home() {
  

  const featured = MOCK_VIDEOS.find((v) => v.featured) ?? MOCK_VIDEOS[0];
  const others = MOCK_VIDEOS.filter((v) => v.id !== featured.id);

  return (
    <main className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <Hero />


      {/* FEATURED VIDEO */}
      <FeaturedVideo video={featured} />


      {/* PORTFOLIO */}
      <Portfolio others={others} />


      {/* CONTACT */}
      <ContactForm />
      

      {/* FOOTER */}
      <Footer />

    </main>
  );
}

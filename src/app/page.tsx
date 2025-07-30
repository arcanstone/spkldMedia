"use client";

import FeaturedVideo from "@/components/FeaturedVideo";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Video } from "@/types/video";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2"; // New Navbar component
import Navbar3 from "@/components/Navbar3"; // New Navbar component with mobile menu
import Portfolio2 from "@/components/Portfolio2";
import HorizontalVideoScroll from "@/components/HorizontalVideoScroll";


const MOCK_VIDEOS: Video[] = [
  {
    id: "1",
    title: "Luxury Condo Tour – Downtown Toronto    ",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // <-- replace with your CDN url
    featured: true,
  },
  {
    id: "2",
    title: "Modern Family Home – Mississauga",
    src: "https://iframe.mediadelivery.net/embed/473544/2daf328f-f11f-4460-8cc0-0bdf81ec8c78",
  },
  {
    id: "3",
    title: "Penthouse Walkthrough – Yorkville",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "4",
    title: "Waterfront Estate – Lake Simcoe",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "5",
    title: "Executive Townhome – Oakville",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "6",
    title: "Historic Mansion – Forest Hill",
    src: "https://iframe.mediadelivery.net/embed/473544/2daf328f-f11f-4460-8cc0-0bdf81ec8c78",
  },
  {
    id: "7",
    title: "Modern Loft – King West",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "8",
    title: "Family Bungalow – North York",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "9",
    title: "Luxury Villa – Muskoka",
    src: "https://iframe.mediadelivery.net/embed/473544/2daf328f-f11f-4460-8cc0-0bdf81ec8c78",
  },
  {
    id: "10",
    title: "Sky-High Penthouse – CN Tower Views",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export default function Home() {

  if(maintenanceMode){
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Site Under Maintenance</h1>
        <p className="mt-4">{"We'll be back soon!"}</p>
      </main>
    );
  }
  else{
    

    const featured = MOCK_VIDEOS.find((v) => v.featured) ?? MOCK_VIDEOS[0];
    const others = MOCK_VIDEOS.filter((v) => v.id !== featured.id);

    return (
      <main className="flex min-h-screen flex-col">
        {/* NAVBAR */}
        <Navbar3 />


        {/* HERO */}
        <Hero />

        {/* HORIZONTAL VIDEO SCROLL */}
        <HorizontalVideoScroll videos={others} title="Featured Properties" />

        {/* FEATURED VIDEO */}
        <FeaturedVideo video={featured} />


        {/* PORTFOLIO */}
        <Portfolio videos={others} />

        {/* PORTFOLIO2 */}
        <Portfolio2/>


        {/* CONTACT */}
        <ContactForm />
        

        {/* FOOTER */}
        <Footer />

      </main>
    );
  }
}

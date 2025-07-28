'use client';

import { useState } from 'react';

type Video = {
  id: string;
  title: string;
  thumbnail?: string; // (optional) if you want to show thumbnails
  src: string;        // HLS/MP4 URL from Bunny/Cloudflare Stream
  featured?: boolean;
};

const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Luxury Condo Tour – Downtown Toronto',
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
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      // TODO: Wire this to your backend (/api/contact or serverless func)
      console.log('Pretend-send', data);
      await new Promise((res) => setTimeout(res, 600));
      setFormState('success');
      form.reset();
    } catch {
      setFormState('error');
    } finally {
      setTimeout(() => setFormState('idle'), 4000);
    }
  }

  const featured = MOCK_VIDEOS.find((v) => v.featured) ?? MOCK_VIDEOS[0];
  const others = MOCK_VIDEOS.filter((v) => v.id !== featured.id);

  return (
    <main className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-bold">
            Aylmer Real Estate Media
          </a>
          <div className="flex gap-4 text-sm">
          <a href="#portfolio" className="hover:opacity-80 transition-opacity">Portfolio</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-black px-4 text-center text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0.9))]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
            4K Real Estate Videography That Sells
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-neutral-300">
            High-impact property tours, aerials, and cinematic edits — optimized for mobile and web.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#portfolio"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section id="featured" className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Featured Project</h2>
        <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
          <div className="aspect-video w-full bg-black">
            <video
              controls
              preload="metadata"
              className="h-full w-full"
              poster={featured.thumbnail}
            >
              <source src={featured.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{featured.title}</h3>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16">
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
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto w-full max-w-3xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact</h2>
        <p className="mb-6 text-sm text-neutral-500">
          Tell us about your property and the type of shoot you need. We’ll reply ASAP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="Tell us about the property, location, and what you’re looking for."
            />
          </div>

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState === 'submitting' ? 'Sending…' : 'Send'}
        </button>

        {formState === 'success' && (
          <p className="pt-2 text-sm text-green-600">Thanks! We’ll get back to you soon.</p>
        )}
        {formState === 'error' && (
          <p className="pt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
        )}
        </form>

        <div className="mt-8 text-sm text-neutral-500">
          <p>Email: <a href="mailto:contact@example.com" className="underline">contact@example.com</a></p>
          <p>Phone: <a href="tel:+11234567890" className="underline">+1 (123) 456-7890</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Aylmer Real Estate Media. All rights reserved.
      </footer>
    </main>
  );
}

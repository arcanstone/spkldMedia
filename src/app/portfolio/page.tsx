// app/portfolio/page.tsx

'use client';
import React from 'react';
import Navbar3 from '@/components/Navbar3'; // Adjust path if needed
import Footer from '@/components/Footer';   // Adjust path if needed
import Portfolio2 from '@/components/Portfolio2'; // Move code there, or paste directly below

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar3 />
      <Portfolio2 />
      <Footer />
    </main>
  );
}

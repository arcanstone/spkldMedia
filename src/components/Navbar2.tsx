// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyBusiness
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/quote" label="Quote" />
            <NavLink href="/login" label="Login" />
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/quote" label="Quote" />
            <NavLink href="/login" label="Login" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
    >
      {label}
    </Link>
  );
}

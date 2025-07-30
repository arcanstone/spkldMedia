import React, { useState } from 'react';
import { Menu, X, User, FileText, LogIn, ChevronRight } from 'lucide-react';

const Navbar3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-stone-100 shadow-md border-b border-stone-200 relative z-50" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-stone-800 text-xl font-bold" style={{
                fontFamily: '"Times New Roman", Times, serif',
                lineHeight: '0.85'
              }}>
                Spkld<br />Media
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              <a
                href="/portfolio"
                className="text-stone-700 hover:text-amber-700 text-lg font-normal transition-all duration-200 flex items-center mr-4"
              >
                Portfolio
                <ChevronRight className="w-3 h-3 ml-1" />
              </a>
              
              <a
                href="/quotes"
                className="text-stone-700 hover:text-amber-700 text-lg font-normal transition-all duration-200 flex items-center mr-4"
              >
                Quotes
                <ChevronRight className="w-3 h-3 ml-1" />
              </a>

              <a
                href="/login"
                className="text-stone-700 hover:text-amber-700 px-4 py-2 text-lg font-medium transition-all duration-200 border border-stone-300 hover:border-amber-700 hover:bg-white/50 flex items-center"
              >
                Login
                <ChevronRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-stone-700 hover:text-amber-700 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-stone-100 z-40">
          <div className="px-4 py-1">
            <a
              href="/portfolio"
              className="text-stone-700 hover:text-amber-700 block px-4 py-2 text-lg font-normal transition-all duration-200 flex items-center justify-between"
            >
              Portfolio
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <a
              href="/quotes"
              className="text-stone-700 hover:text-amber-700 block px-4 py-2 text-lg font-normal transition-all duration-200 flex items-center justify-between"
            >
              Quotes
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="/login"
              className="text-stone-700 hover:text-amber-700 block px-4 py-2 text-lg font-normal transition-all duration-200 flex items-center justify-between"
            >
              Login
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Client Login at bottom */}
            <div className="mt-4 pt-3 border-t border-stone-300 max-w-xs mx-auto">
              <a
                href="/client-login"
                className="text-stone-700 hover:text-amber-700 block px-4 py-2 text-base font-medium border border-stone-400 hover:border-amber-700 hover:bg-white/50 transition-all duration-200 text-center"
              >
                Client Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar3;
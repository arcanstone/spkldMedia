const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-bold">
          Aylmer Real Estate Media
        </a>
        <div className="flex gap-4 text-sm">
          <a href="#portfolio" className="hover:opacity-80 transition-opacity">
            Portfolio
          </a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
const Hero = ()=> {
    return (
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
      </section>)
}

export default Hero;
const Hero = ()=> {
    return (
        <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 text-center text-white"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/5526302/5526302-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute inset-0 bg-black" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 w-full text-left">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-6xl font-normal leading-tight md:text-8xl" style={{
              fontFamily: '"Times New Roman", Times, serif'
            }}>
              4K Real Estate Videography<br />That Sells
            </h1>
            <p className="mb-12 max-w-xl text-xl text-neutral-300">
              High-impact property tours, aerials, and cinematic edits — optimized for mobile and web.
            </p>
            <div className="flex justify-start">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-black bg-white text-black text-xl font-bold hover:bg-black hover:text-white transition-all duration-200"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </section>)
}

export default Hero;
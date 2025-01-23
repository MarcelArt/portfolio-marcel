function Hero() {
    return (
      <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Hello, I'm <span className="text-cyan-400">Marcel Marihot Putra Aritonang</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A passionate Frontend Developer building amazing digital experiences.
          </p>
          <a type="button" href="#projects" className="px-6 py-3 bg-cyan-400 rounded-lg text-white font-bold hover:bg-cyan-300">
            View My Work
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="uppercase tracking-[10px] text-gray-400">
          Luxury Exists In The Dark
        </p>

        <h1 className="text-7xl font-bold mt-6">
          NOCTURNE
        </h1>

        <p className="max-w-xl mx-auto mt-6 text-gray-400">
          Every artifact tells a story.
          Every collection hides a legacy.
        </p>

        <button className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all">
          Enter The Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
const ArtifactCard = () => {
  return (
    <div
      className="
      bg-[#141414]
      border border-zinc-800
      rounded-xl
      overflow-hidden
      hover:border-[#C9A227]
      transition-all duration-500
      "
    >
      <div className="h-[350px] bg-zinc-900" />

      <div className="p-6">
        <p className="text-zinc-400 text-sm">
          Chapter I
        </p>

        <h3 className="text-2xl mt-2">
          Obsidian Watch
        </h3>

        <p className="mt-4 text-[#C9A227]">
          ₹12,999
        </p>
      </div>
    </div>
  );
};

export default ArtifactCard;
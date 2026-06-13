const ArtifactCard = ({ product }) => {
  return (
    <div
      className="
      group
      bg-[#141414]
      border border-zinc-800
      rounded-2xl
      overflow-hidden
      transition-all duration-500
      hover:border-[#C9A227]
      hover:-translate-y-2
      "
    >
      {/* Image Area */}

      <div
        className="
        h-[350px]
        bg-gradient-to-b
        from-zinc-800
        to-black
        flex
        items-center
        justify-center
        "
      >
        <span
          className="
          text-6xl
          opacity-30
          group-hover:scale-110
          transition-all duration-500
          "
        >
          ◆
        </span>
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-zinc-500 text-sm">
          {product.collection}
        </p>

        <h3 className="text-2xl mt-2">
          {product.title}
        </h3>

        <p className="text-[#C9A227] mt-4">
          ₹ {product.price.toLocaleString()}
        </p>

      </div>
    </div>
  );
};

export default ArtifactCard;
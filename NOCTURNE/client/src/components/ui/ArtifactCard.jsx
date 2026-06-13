import { useState } from "react";
import ProductModal from "./ProductModal";

const ArtifactCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="
          group
          bg-[#141414]
          border
          border-zinc-800
          rounded-2xl
          overflow-hidden
          cursor-pointer
          transition-all
          duration-500
          hover:border-[#C9A227]
          hover:-translate-y-4
          hover:shadow-[0_0_50px_rgba(201,162,39,0.15)]
        "
      >
        {/* Artifact Visual */}

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
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:opacity-60
            "
          >
            ◆
          </span>
        </div>

        {/* Content */}

        <div className="p-6">
          <p className="text-zinc-500 text-sm tracking-widest">
            {product.category}
          </p>

          <h3 className="text-2xl mt-2">
            {product.title}
          </h3>

          <p className="text-zinc-400 mt-4 text-sm">
            {product.description}
          </p>

          <p className="text-[#C9A227] mt-6 text-lg">
            ₹ {product.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Vault Modal */}

      <ProductModal
        product={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ArtifactCard;
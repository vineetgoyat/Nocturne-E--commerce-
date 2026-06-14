import { useState } from "react";
import ProductModal from "./ProductModal";
import { useNavigate } from "react-router-dom";

const ArtifactCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => navigate(`/artifact/${product._id}`)}
        className="
          group
          relative
          bg-[#111111]
          border
          border-zinc-800
          rounded-3xl
          overflow-hidden
          cursor-pointer
          transition-all
          duration-700
          hover:-translate-y-4
          hover:border-[#C9A227]
          hover:shadow-[0_0_60px_rgba(201,162,39,0.18)]
        "
      >
        {/* Image Section */}

        <div className="relative h-[420px] overflow-hidden">
          <img
            src={
              product.image ||
              "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200"
            }
            alt={product.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Dark Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
            "
          />

          {/* Category Badge */}

          <div
            className="
              absolute
              top-5
              left-5
              px-4
              py-2
              rounded-full
              border
              border-[#C9A227]/40
              bg-black/40
              backdrop-blur-sm
            "
          >
            <span
              className="
                text-[11px]
                tracking-[3px]
                uppercase
                text-[#C9A227]
              "
            >
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}

        <div className="p-7">
          <h3
            className="
              text-3xl
              text-white
              font-light
              tracking-wide
            "
          >
            {product.title}
          </h3>

          <p
            className="
              text-zinc-400
              mt-4
              leading-relaxed
            "
          >
            {product.description}
          </p>

          <div
            className="
              flex
              justify-between
              items-center
              mt-8
            "
          >
            <p
              className="
                text-[#C9A227]
                text-2xl
                font-light
              "
            >
              ₹ {product.price.toLocaleString()}
            </p>

            <span
              className="
                text-xs
                tracking-[4px]
                uppercase
                text-zinc-500
                group-hover:text-[#C9A227]
                transition-all
              "
            >
              View Artifact →
            </span>
          </div>
        </div>

        {/* Gold Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            pointer-events-none
            bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_70%)]
          "
        />
      </div>

      <ProductModal
        product={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ArtifactCard;
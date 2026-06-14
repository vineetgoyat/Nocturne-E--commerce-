import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <section className="min-h-screen bg-black text-white px-8 py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Image */}

        <div>
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200"
            alt="product"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Content */}

        <div>

          <p className="uppercase tracking-[6px] text-[#C9A227]">
            Artifact
          </p>

          <h1 className="text-6xl mt-4">
            Phantom Jacket
          </h1>

          <p className="text-zinc-400 mt-8 leading-relaxed">
            Crafted for collectors who embrace mystery.
            Every stitch tells a story.
            Every detail preserves a legacy.
          </p>

          <p className="text-[#C9A227] text-4xl mt-10">
            ₹299
          </p>

          <button
            className="
              mt-10
              px-8
              py-4
              border
              border-[#C9A227]
              hover:bg-[#C9A227]
              hover:text-black
              transition-all
            "
          >
            Add To Vault
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductDetail;
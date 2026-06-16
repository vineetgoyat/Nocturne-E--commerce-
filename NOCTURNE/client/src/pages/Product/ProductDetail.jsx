import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useVaultStore from "../../store/useVaultStore";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToVault } = useVaultStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-white text-center py-32">
        Loading Artifact...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-8 py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <img
            src={
              product.image ||
              "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200"
            }
            alt={product.title}
            className="w-full rounded-3xl h-[700px] object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[6px] text-[#C9A227]">
            {product.category}
          </p>

          <h1 className="text-6xl mt-4">
            {product.title}
          </h1>

          <p className="text-zinc-400 mt-8 leading-relaxed">
            {product.description}
          </p>

          <p className="text-[#C9A227] text-4xl mt-10">
            ₹ {product.price}
          </p>

          <button
            onClick={() => addToVault(product)}
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
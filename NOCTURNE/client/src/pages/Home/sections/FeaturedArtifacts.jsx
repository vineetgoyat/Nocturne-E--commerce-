import { useState } from "react";

import ArtifactCard from "../../../components/ui/ArtifactCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import Container from "../../../components/ui/Container";

import useProducts from "../../../hooks/useProducts";

const FeaturedArtifacts = () => {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  if (loading) {
    return (
      <section className="py-32 px-6">
        <SectionTitle
          subtitle="Featured"
          title="Artifacts"
        />

        <div className="text-center text-zinc-400 mt-10">
          Loading Artifacts...
        </div>
      </section>
    );
  }

  return (
    <section
      id="artifacts"
      className="py-32 px-6"
    >
      <SectionTitle
        subtitle="Featured"
        title="Artifacts"
      />

      {/* Search */}

      <div className="max-w-7xl mx-auto mb-10">

        <input
          type="text"
          placeholder="Search Artifacts..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            bg-[#111111]
            border
            border-zinc-800
            rounded-2xl
            p-5
            text-white
            outline-none
            focus:border-[#C9A227]
          "
        />

      </div>

      {/* Categories */}

      <div
        className="
          flex
          flex-wrap
          gap-4
          justify-center
          mb-12
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
            className={`
              px-6
              py-3
              rounded-full
              border
              transition-all

              ${
                category === cat
                  ? "bg-[#C9A227] text-black border-[#C9A227]"
                  : "border-zinc-700 text-zinc-400"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}

      <p
        className="
          text-center
          text-zinc-500
          mb-10
        "
      >
        Showing {filteredProducts.length} Artifacts
      </p>

      {/* Products */}

      {filteredProducts.length === 0 ? (
        <div
          className="
            text-center
            text-zinc-500
            text-xl
          "
        >
          No Artifacts Found
        </div>
      ) : (
        <Container
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >
          {filteredProducts.map(
            (product) => (
              <ArtifactCard
                key={product._id}
                product={product}
              />
            )
          )}
        </Container>
      )}
    </section>
  );
};

export default FeaturedArtifacts;
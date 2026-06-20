import SectionTitle from "../../../components/ui/SectionTitle";
import Container from "../../../components/ui/Container";

const collections = [
  {
    name: "TIMEPIECES",
    desc: "Mechanical masterpieces crafted to transcend generations.",
  },
  {
    name: "LEATHER GOODS",
    desc: "Hand-finished creations where elegance meets utility.",
  },
  {
    name: "COLLECTOR'S EDITION",
    desc: "Rare acquisitions reserved for the most discerning collectors.",
  },
  {
    name: "LEGACY OBJECTS",
    desc: "Artifacts selected for their enduring stories and heritage.",
  },
];

const Collections = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center mb-24">
        <p
          className="
            text-zinc-500
            text-lg
            leading-relaxed
          "
        >
          Explore curated worlds where craftsmanship,
          rarity and timeless design converge into
          collectible luxury.
        </p>
      </div>

      <Container
        className="
          grid
          md:grid-cols-2
          gap-8
        "
      >
        {collections.map((collection) => (
          <div
            key={collection.name}
            className="
              bg-[#111111]

              border border-zinc-800

              p-16

              min-h-[360px]

              rounded-3xl

              group

              relative

              overflow-hidden

              flex

              flex-col

              justify-center

              hover:-translate-y-3

              hover:shadow-[0_0_60px_rgba(201,162,39,0.15)]

              transition-all

              duration-700
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.08),transparent_60%)]
              "
            />

            {/* Content */}

            <div className="relative z-10">
              <p
                className="
                  uppercase
                  tracking-[6px]
                  text-xs
                  text-[#C9A227]
                  mb-6
                "
              >
                Collection
              </p>

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  font-light
                  tracking-[3px]
                  leading-tight
                  text-white
                  group-hover:text-[#C9A227]
                  transition-all
                  duration-500
                "
              >
                {collection.name}
              </h3>

              <p
                className="
                  text-zinc-500
                  text-lg
                  leading-relaxed
                  mt-8
                  max-w-md
                "
              >
                {collection.desc}
              </p>

              <div className="mt-12">
                <span
                  className="
                    uppercase
                    tracking-[4px]
                    text-xs
                    text-zinc-400
                    group-hover:text-[#C9A227]
                    transition-all
                  "
                >
                  Explore Collection →
                </span>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Collections;
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
    <section className="py-40 px-6">
      <SectionTitle
        subtitle="Chapters"
        title="Collections"
      />
      <div className="max-w-3xl mx-auto text-center mb-20">

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

      <Container className="grid md:grid-cols-2 gap-8">

        {collections.map((collection) => (
          <div
            key={collection.name}
            className="
            bg-[#111111]
            border border-zinc-800
            p-12
            min-h-[300px]
            rounded-3xl
            group
            relative
            overflow-hidden
            hover:border-[#C9A227]
            transition-all duration-500
            cursor-pointer
            "
          >
            <h3
            className="
              text-4xl
              font-light
              tracking-[3px]
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
                mt-6
                text-lg
                leading-relaxed
              "
            >
              {collection.desc}
            </p>
          </div>
        ))}

      </Container>
    </section>
  );
};

export default Collections;
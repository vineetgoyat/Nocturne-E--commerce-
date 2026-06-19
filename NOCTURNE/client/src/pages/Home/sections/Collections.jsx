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
    <section className="py-32">
      <SectionTitle
        subtitle="Chapters"
        title="Collections"
      />

      <Container className="grid md:grid-cols-2 gap-8">

        {collections.map((collection) => (
          <div
            key={collection.name}
            className="
            bg-[#141414]
            border border-zinc-800
            p-10
            min-h-[250px]
            rounded-xl
            hover:border-[#C9A227]
            transition-all duration-500
            cursor-pointer
            "
          >
            <h3 className="text-4xl">
              {collection.name}
            </h3>

            <p className="text-zinc-400 mt-4">
              {collection.desc}
            </p>
          </div>
        ))}

      </Container>
    </section>
  );
};

export default Collections;
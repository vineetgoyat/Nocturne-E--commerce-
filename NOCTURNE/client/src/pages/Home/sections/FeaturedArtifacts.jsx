import ArtifactCard from "../../../components/ui/ArtifactCard";
import SectionTitle from "../../../components/ui/SectionTitle";

const FeaturedArtifacts = () => {
  return (
    <section className="py-32 px-6">

      <SectionTitle
        subtitle="Featured"
        title="Artifacts"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
      </div>

    </section>
  );
};

export default FeaturedArtifacts;
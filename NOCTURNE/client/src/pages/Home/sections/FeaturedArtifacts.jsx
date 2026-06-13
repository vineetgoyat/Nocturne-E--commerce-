import ArtifactCard from "../../../components/ui/ArtifactCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import Container from "../../../components/ui/Container";
import useProducts from "../../../hooks/useProducts";

const FeaturedArtifacts = () => {
  const { products, loading } = useProducts();

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
    <section className="py-32 px-6">
      <SectionTitle
        subtitle="Featured"
        title="Artifacts"
      />

      <Container className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ArtifactCard
            key={product._id}
            product={product}
          />
        ))}
      </Container>
    </section>
  );
};

export default FeaturedArtifacts;
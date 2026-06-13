import ArtifactCard from "../../../components/ui/ArtifactCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import Container from "../../../components/ui/Container";
import { featuredProducts } from "../../../constants/products";

const FeaturedArtifacts = () => {
  return (
    <section className="py-32 px-6">

      <SectionTitle
        subtitle="Featured"
        title="Artifacts"
      />

      <Container className="grid md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
         <ArtifactCard
         key={product.id}
         product={product}
      />
))}
      </Container>

    </section>
  );
};

export default FeaturedArtifacts;
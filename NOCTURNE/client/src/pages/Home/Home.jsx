import Hero from "./sections/Hero";
import FeaturedArtifacts from "./sections/FeaturedArtifacts";
import Collections from "./sections/Collections";
import Story from "./sections/Story";
import Newsletter from "./sections/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedArtifacts />
      <Collections />
      <Story />
      <Newsletter />
    </>
  );
};

export default Home;
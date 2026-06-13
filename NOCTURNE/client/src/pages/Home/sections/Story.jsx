import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const Story = () => {
  return (
    <section className="py-40 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-[#C9A227]/5 blur-[180px] rounded-full" />
      </div>

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >

          <p className="uppercase tracking-[8px] text-[#C9A227]">
            Legacy
          </p>

          <h2 className="text-5xl md:text-7xl mt-6 leading-tight max-w-5xl mx-auto">
            Luxury Is Not Owned.
            <br />
            It Is Discovered.
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-10 text-lg">
            Nocturne is built for those who seek more than products.
            Every artifact carries a story.
            Every collection preserves a legacy.
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default Story;
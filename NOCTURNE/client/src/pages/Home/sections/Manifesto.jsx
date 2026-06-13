import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const Manifesto = () => {
  return (
    <section className="py-40">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-[#C9A227]">
            The Manifesto
          </p>

          <h2 className="text-6xl md:text-8xl mt-8 leading-tight">
            We Do Not Sell
            <br />
            Products.
          </h2>

          <h2 className="text-6xl md:text-8xl text-[#C9A227] mt-4">
            We Preserve Stories.
          </h2>

        </motion.div>

      </Container>

    </section>
  );
};

export default Manifesto;
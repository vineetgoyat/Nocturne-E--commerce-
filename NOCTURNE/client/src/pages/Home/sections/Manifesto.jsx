import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const Manifesto = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[900px]
            h-[900px]
            bg-[#C9A227]/5
            blur-[260px]
            rounded-full
          "
        />
      </div>

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            z-10
            text-center
          "
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-[#C9A227]
              text-sm
            "
          >
            The Manifesto
          </p>

          <h2
            className="
              text-5xl
              md:text-8xl
              font-light
              leading-tight
              mt-10
            "
          >
            We Do Not Sell
            <br />
            Products.
          </h2>

          <h2
            className="
              text-5xl
              md:text-8xl
              text-[#C9A227]
              font-light
              mt-6
            "
          >
            We Preserve Stories.
          </h2>

          <p
            className="
              max-w-4xl
              mx-auto
              mt-12
              text-zinc-500
              text-center
              text-xl
              leading-relaxed
            "
          >
            Every artifact within Nocturne is chosen
            not for its price, but for its meaning.
            We believe true luxury is found in
            craftsmanship, rarity and the stories
            carried through generations.
          </p>

          <div
            className="
              mt-20
              flex
              justify-center
            "
          >
            <div
              className="
                w-24
                h-[1px]
                bg-[#C9A227]
              "
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Manifesto;
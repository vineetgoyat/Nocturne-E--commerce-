import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const Story = () => {
  return (
    <section className="relative">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
    <div
      className="
        w-[700px]
        h-[700px]
        bg-[#C9A227]/5
        blur-[220px]
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
        max-w-6xl
        mx-auto
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
        Our Philosophy
      </p>

      <h2
        className="
          text-5xl
          md:text-7xl
          font-light
          leading-[1.15]
          mt-8
        "
      >
        Luxury Is Not Owned.
        <br />
        It Is Remembered.
      </h2>

      <p
        className="
          text-zinc-400
          max-w-3xl
          mx-auto
          mt-10
          text-xl
          leading-relaxed
          text-center
        "
      >
              Nocturne was created for collectors who
              value stories over possessions.
              Every artifact represents heritage,
              craftsmanship and permanence in a world
        o      bsessed with the temporary.
      </p>

      <div
        className="
          grid
          md:grid-cols-3
          gap-10
          mt-24
        "
      >
        <div>
          <h3
            className="
              text-4xl
              text-[#C9A227]
              font-light
            "
          >
            100+
          </h3>

          <p className="mt-4 text-zinc-500">
            Curated Luxury Artifacts
          </p>
        </div>

        <div>
          <h3
            className="
              text-4xl
              text-[#C9A227]
              font-light
            "
          >
            50+
          </h3>

          <p className="mt-4 text-zinc-500">
            Private Collectors
          </p>
        </div>

        <div>
          <h3
            className="
              text-4xl
              text-[#C9A227]
              font-light
            "
          >
            Timeless
          </h3>

          <p className="mt-4 text-zinc-500">
            Built For Legacy
          </p>
        </div>
      </div>
    </motion.div>
  </Container>
</section>
  );
};

export default Story;
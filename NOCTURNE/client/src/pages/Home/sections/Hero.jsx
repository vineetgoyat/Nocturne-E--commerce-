import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[10px] text-[#C9A227]"
        >
          Luxury Exists In The Dark
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold mt-6"
        >
          NOCTURNE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-8 text-zinc-400 text-lg"
        >
          Enter a world where luxury is not purchased, it is discovered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Button>Enter The Collection</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
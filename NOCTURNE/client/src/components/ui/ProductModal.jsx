import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-6
            "
          >
            <div
              className="
                bg-[#111]
                border border-zinc-800
                rounded-3xl
                w-full
                max-w-4xl
                p-10
              "
            >
              <p className="text-[#C9A227] tracking-[6px] uppercase">
                {product.collection}
              </p>

              <h2 className="text-5xl mt-4">
                {product.title}
              </h2>

              <p className="text-zinc-400 mt-6">
                {product.description}
              </p>

              <p className="text-[#C9A227] text-3xl mt-8">
                ₹ {product.price.toLocaleString()}
              </p>

              <button
                onClick={onClose}
                className="mt-10 border px-6 py-3"
              >
                Close Vault
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
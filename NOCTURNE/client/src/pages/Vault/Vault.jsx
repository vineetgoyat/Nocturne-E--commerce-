import useVaultStore from "../../store/useVaultStore";
import axios from "axios";



const Vault = () => {
  const { vault, removeFromVault } = useVaultStore();

  return (
    <section className="min-h-screen bg-black text-white px-8 py-32">
      <h1 className="text-6xl mb-12">
        The Vault
      </h1>

      {vault.length === 0 ? (
        <p className="text-zinc-500">
          Your Vault is Empty.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {vault.map((item) => (
            <div
              key={item._id}
              className="
                border
                border-zinc-800
                rounded-2xl
                overflow-hidden
                bg-[#111111]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl">
                  {item.title}
                </h3>

                <p className="text-[#C9A227] mt-2">
                  ₹ {item.price}
                </p>

                <button
                  onClick={() => removeFromVault(item._id)}
                  className="
                    mt-4
                    px-4
                    py-2
                    border
                    border-red-500
                    text-red-500
                    rounded-xl
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                  "
                >
                  Remove
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Vault;
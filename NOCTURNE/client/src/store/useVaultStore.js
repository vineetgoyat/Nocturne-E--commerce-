import { create } from "zustand";
import { persist } from "zustand/middleware";

const useVaultStore = create(
  persist(
    (set) => ({
      vault: [],

      addToVault: (product) =>
        set((state) => ({
          vault: [...state.vault, product],
        })),

      removeFromVault: (id) =>
        set((state) => ({
          vault: state.vault.filter(
            (item) => item._id !== id
          ),
        })),
    }),
    {
      name: "nocturne-vault",
    }
  )
);

export default useVaultStore;
import { create } from "zustand";

const useVaultStore = create((set) => ({
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
}));

export default useVaultStore;
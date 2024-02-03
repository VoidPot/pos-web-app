import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  product: null,
  mode: "UNSET",
  //   setEdit: (product) => set((_state) => ({ product, mode: "EDIT" })),
  setAdd: () => set({ product: null, mode: "ADD" }),
  setEdit: (product: any) => set({ product, mode: "EDIT" }),
  setProducts: (products: any) => set({ products }),
}));

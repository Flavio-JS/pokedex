import { sva } from "../../../styled-system/css";

export const detailsPokemonPageStyles = sva({
  slots: ["detailsPokemonWrapper"],
  base: {
    detailsPokemonWrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      padding: "4px",
      width: "100vw",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.20)",
      backgroundColor: "grayscale.wireframe",
    },
  },
  variants: {},
});

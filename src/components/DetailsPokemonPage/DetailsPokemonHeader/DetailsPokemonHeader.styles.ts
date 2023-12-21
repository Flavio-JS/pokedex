import { sva } from "../../../../styled-system/css";

export const detailsPokemonHeaderStyles = sva({
  slots: [
    "detailsPokemonHeaderWrapper",
    "detailsPokemonHeaderH1",
    "detailsPokemonHeaderH2",
  ],
  base: {
    detailsPokemonHeaderWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 16px 20px 16px",
      color: "grayscale.white",
    },
    detailsPokemonHeaderH1: {
      fontSize: "24px",
      fontWeight: "700",
    },
    detailsPokemonHeaderH2: {
      fontSize: "12px",
      fontWeight: "700",
    },
  },
  variants: {},
});

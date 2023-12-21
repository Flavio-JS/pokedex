import { sva } from "../../../../styled-system/css";

export const detailsPokemonImageStyles = sva({
  slots: [
    "detailsPokemonImageWrapper",
    "detailsPokemonImage",
    "detailsPokemonImagePreviousAndNextButton",
  ],
  base: {
    detailsPokemonImageWrapper: {
      display: "flex",
      minHeight: "144px",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "0 16px 0 16px",
    },
    detailsPokemonImage: {
      position: "absolute",
      top: "80px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "999",
    },
    detailsPokemonImagePreviousAndNextButton: {
      marginBottom: "20px",

      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  variants: {},
});

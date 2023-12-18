import { sva } from "../../../../styled-system/css/sva";

export const pokedexListHeaderStyles = sva({
  slots: [
    "pokedexListHeaderWrapper",
    "pokedexListHeaderFilterWrapper",
    "pokedexListHeaderSortWrapper",
  ],
  base: {
    pokedexListHeaderWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "12px 12px 24px 12px",
      backgroundColor: "identity.primary",
      width: "100%",
    },
    pokedexListHeaderFilterWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    pokedexListHeaderSortWrapper: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      color: "grayscale.white",
    },
  },
  variants: {},
});

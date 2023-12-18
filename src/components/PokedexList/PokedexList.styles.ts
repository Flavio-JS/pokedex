import { sva } from "../../../styled-system/css/sva";

export const pokedexListStyles = sva({
  slots: ["pokedexListWrapper", "pokedexListPokemonCardWrapper"],
  base: {
    pokedexListWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "4px",
      backgroundColor: "identity.primary",
      height: "100vh",
      width: "100vw",
      overflowY: "hidden",
    },
    pokedexListPokemonCardWrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      height: "calc(100vh - 84px)",
      gap: "10px",
      padding: "10px",
      backgroundColor: "grayscale.white",
      justifyContent: "space-between",
      alignContent: "flex-start",
      borderRadius: "8px",
      overflowY: "scroll",

      "&::-webkit-scrollbar": {
        width: "12px",
        borderRadius: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: "6px",
      },
    },
  },
  variants: {},
});

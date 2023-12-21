import { sva } from "../../../../styled-system/css";

export const pokemonCardStyles = sva({
  slots: [
    "pokemonCardWrapper",
    "pokemonNumberWrapper",
    "pokemonImageWrapper",
    "pokemonImage",
    "pokemonNameWrapper",
  ],
  base: {
    pokemonCardWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "108px",
      width: "104px",
      borderRadius: "8px",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.20)",
      "&:hover": {
        cursor: "pointer",
      },
    },
    pokemonNumberWrapper: {
      display: "flex",
      justifyContent: "end",
      height: "12px",
      width: "100%",
      padding: "4px 8px 0 8px",
      fontSize: "8px",
    },
    pokemonImageWrapper: {
      position: "relative",
    },
    pokemonImage: {
      position: "absolute",
      transform: "translate(-50%, -30%)",
      top: "50%",
      left: "50%",
    },
    pokemonNameWrapper: {
      textAlign: "center",
      padding: "24px 8px 4px 8px",
      backgroundColor: "grayscale.background",
      fontSize: "10px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
  variants: {},
});

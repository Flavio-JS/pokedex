import { sva } from "../../../styled-system/css";

export const detailsPokemonPage = sva({
  slots: [
    "detailsPokemonWrapper",
    "detailsPokemonHeader",
    "detailsPokemonTitleH1",
    "detailsPokemonTitleH2",
    "detailsPokemonImageWrapper",
    "detailsPokemonImage",
    "detailsPokemonStatsWrapper",
    "detailsPokemonPreviousAndNextButton",
    "detailsPokemonTypesWrapper",
  ],
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
    detailsPokemonHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 16px 20px 16px",
      color: "grayscale.white",
    },
    detailsPokemonTitleH1: {
      fontSize: "24px",
      fontWeight: "700",
    },
    detailsPokemonTitleH2: {
      fontSize: "12px",
      fontWeight: "700",
    },
    detailsPokemonImageWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "0 16px 0 16px",
    },
    detailsPokemonPreviousAndNextButton: {
      marginBottom: "20px",
    },
    detailsPokemonImage: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      top: "72px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "999",
    },
    detailsPokemonStatsWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 20px 20px 20px",
      height: "100%",
      width: "100%",
      backgroundColor: "grayscale.white",
    },
    detailsPokemonTypesWrapper: {
      display: "flex",
      gap: "16px",
    },
  },
  variants: {},
});

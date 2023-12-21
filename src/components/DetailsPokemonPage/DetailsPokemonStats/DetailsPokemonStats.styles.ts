import { sva } from "../../../../styled-system/css";

export const detailsPokemonStatsStyles = sva({
  slots: [
    "detailsPokemonStatsWrapper",
    "detailsPokemonStatsTypesWrapper",
    "detailsPokemonStatsPhysicalInformationWrapper",
  ],
  base: {
    detailsPokemonStatsWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 20px 20px 20px",
      height: "100%",
      width: "100%",
      backgroundColor: "grayscale.white",
      borderRadius: "8px",
      gap: "16px",
    },
    detailsPokemonStatsTypesWrapper: {
      display: "flex",
      gap: "16px",
    },
    detailsPokemonStatsPhysicalInformationWrapper: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    },
  },
  variants: {},
});

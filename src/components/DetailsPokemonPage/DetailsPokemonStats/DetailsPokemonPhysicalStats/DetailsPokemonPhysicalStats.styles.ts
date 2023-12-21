import { sva } from "../../../../../styled-system/css";

export const detailsPokemonPhysicalStatsStyles = sva({
  slots: ["detailsPokemonPhysicalStatsWrapper"],
  base: {
    detailsPokemonPhysicalStatsWrapper: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    },
  },
  variants: {
    typeColor: {},
  },
});

import { sva } from "../../../../styled-system/css/sva";

export const sortButtonStyles = sva({
  slots: ["SortButtonWrapper"],
  base: {
    SortButtonWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset",
      padding: "8px",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      backgroundColor: "grayscale.white",

      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  variants: {},
});

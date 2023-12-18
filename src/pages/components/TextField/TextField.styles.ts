import { sva } from "../../../../styled-system/css/sva";

export const TextFieldStyles = sva({
  slots: ["TextFieldWrapper", "TextFieldInput"],
  base: {
    TextFieldWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      maxWidth: "200px",
      padding: "8px 16px 8px 12px",
      borderRadius: "16px",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset",
      gap: "8px",
      backgroundColor: "grayscale.white",
    },
    TextFieldInput: {
      all: "unset",
      maxWidth: "120px",

      "&:focus-visible": {
        outline: "none",
      },
    },
  },
  variants: {},
});

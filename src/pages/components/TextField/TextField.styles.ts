import { sva } from "../../../../styled-system/css/sva";

export const TextFieldStyles = sva({
  slots: ["TextFieldWrapper", "TextFieldInput"],
  base: {
    TextFieldWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "min-content",
      padding: "8px 16px 8px 12px",
      borderRadius: "16px",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset",
      gap: "8px",
    },
    TextFieldInput: {
      all: "unset",

      "&:focus-visible": {
        outline: "none",
      },
    },
  },
  variants: {},
});

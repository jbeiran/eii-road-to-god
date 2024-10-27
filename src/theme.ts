import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  Text: {
    variants: {
      "heading-1": {
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
  },
});

import { extendVariants, Button } from "@nextui-org/react";

export const SearchButton = extendVariants(Button, {
  variants: {
    color: {
      green: "bg-[#9CBA3F]",
    },
  },
});

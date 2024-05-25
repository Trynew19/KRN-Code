import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "blue.300",
    useSystemColorMode: false,
  },
});
export default theme;

import Navbar from "@/components/molecules/Navbar";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Navbar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

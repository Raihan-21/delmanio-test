import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box>
      <Box
        color={router.pathname === "/" ? "blue" : "black"}
        paddingX={5}
        paddingY={3}
      >
        Home
      </Box>
      <Box paddingX={5} paddingY={3}>
        Dashboard
      </Box>
      <Box
        color={router.pathname === "/users" ? "blue" : "black"}
        paddingX={5}
        paddingY={3}
      >
        Users
      </Box>
      <Box paddingX={5} paddingY={3}>
        Registration
      </Box>
      <Box paddingX={5} paddingY={3}>
        Search
      </Box>
    </Box>
  );
};

export default Navbar;

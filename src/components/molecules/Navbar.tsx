import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box>
      <Text color={router.pathname === "/" ? "blue" : "black"}>Home</Text>
      <Text>Dashboard</Text>
      <Text>Users</Text>
      <Text>Registration</Text>
      <Text>Search</Text>
    </Box>
  );
};

export default Navbar;

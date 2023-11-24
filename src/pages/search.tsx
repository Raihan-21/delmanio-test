import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box minHeight={"100vh"}>
      <Text>Search User</Text>

      <Input width={"100%"} marginBottom={5} />
      <Box border={"1px solid black"}>
        <Flex justifyContent={"center"} alignItems={"center"}></Flex>
      </Box>
    </Box>
  );
};

export default Search;

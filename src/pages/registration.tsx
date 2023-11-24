import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  return (
    <Box minHeight={"100vh"} padding={10}>
      <Text fontWeight={"bold"} fontSize={20}>
        User Registration
      </Text>
      <Box>
        <form action="">
          <FormControl isInvalid={formData.name === ""}>
            <FormLabel>Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default Registration;

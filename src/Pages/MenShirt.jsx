import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MenShirtList from "../Components/MenShirtList";
import MenShirtSidebar from "../Components/MenShirtSidebar";

const MenShirt = () => {
  return (
    <Flex>
      <Box w="30%">
        <MenShirtSidebar />
      </Box>
      <Box w="auto">
        <MenShirtList />
      </Box>
    </Flex>
  );
};

export default MenShirt;
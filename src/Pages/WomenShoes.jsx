import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import WomenShoesList from "../Components/WomenShoesList";
import WomenSidebar from "../Components/WomenSidebar";

const WomenShoes = () => {
  return (
    <Flex>
      <Box w="30%">
        <WomenSidebar />
      </Box>
      <Box w="auto">
        <WomenShoesList />
      </Box>
    </Flex>
  );
};

export default WomenShoes;
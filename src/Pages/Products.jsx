import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductList from "../Components/ProductList";
import SideBar from "../Components/SideBar";

const Products = () => {
  return (
    <Flex>
      <Box w="30%">
        <SideBar />
      </Box>
      <Box w="auto">
        <ProductList />
      </Box>
    </Flex>
  );
};

export default Products;
import { Box, Button, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getdataAxios } from "../Redux/CartReducer/action";
import styles from "../Styling/Cart.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
function Polo() {
  let box = document.querySelector(".product-container");
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    getdataAxios().then((res) => {
        setdata(res);
    });
  }, [page]);
  let nextbtn = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  let prebtn = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  return (
    <Box
      p={"0px 20px "}
      position="relative"
      m={"20px"}
      overflow="hidden"
      overflowX="hidden"
    >
      <Button
        position={"absolute"}
        left="0px"
        top={"40%"}
        onClick={nextbtn}
        zIndex={2}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        position={"absolute"}
        right="0px"
        top={"40%"}
        onClick={prebtn}
        zIndex={2}
      >
        <ChevronRightIcon />
      </Button>
      <Grid
        display={"flex"}
        position="relative"
        overflow="hidden"
        className="product-container"
        zIndex={-1}
        overflowX="hidden"
        m={"auto"}
      >
        {data &&
          data.map((el) => {
            return (
              <GridItem p={"30px"}>
                <Text h={"150px"} w={"200px"}>
                  <Img src={el.image} width={"100%"} height={"100%"}></Img>
                </Text>
                <Text
                  fontWeight={500}
                  className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                >
                  {el.description}
                </Text>
                <Text
                  color={"gray.500"}
                  fontWeight={500}
                  display="inline"
                  marginRight={"10px"}
                >
                  {el.brand}
                </Text>
                <Text color={"teal"} display="inline">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </Text>
                <Text className={styles.purple} m={"5px 0px"} w={"100px"}>
                  #1 Best Seller
                </Text>
                <Text fontWeight={500} display="inline" marginRight={"10px"}>
                  ₹{el.price}
                </Text>
                <Text
                  fontWeight={300}
                  textDecoration="line-through"
                  display="inline"
                >
                  M.R.P ₹{4999 + Math.floor(Math.random() * 1000)}
                </Text>
                <Text color={"gray.500"}>Get it by Friday, March 31</Text>
                <Text color={"gray.500"}>FREE Delivery over ₹499.</Text>
                <Text color={"#e47911"}>Fulfilled by Amazon.</Text>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

export default Polo;
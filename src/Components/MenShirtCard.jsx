import { Box, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import Styles from "../Styling/ProductCard.module.css";
import { Link } from "react-router-dom";
import AlertDialogue from "./AlertDialog";

export default function MenShirtCard({
  image,
  price,
  brand,
  rating,
  description,
  id,
}) {
  return (
    <LinkBox
      as="article"
      maxW="sm"
      borderWidth="1px"
      rounded="md"
      className={Styles.ProductCard}
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="auto"
        p="10px"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"
          m="1px"
          h={"190px"}
        >
          <Image h="65%" src={image} alt={image} />
        </Box>

        <Box p="1">
          <Box
            textAlign={"center"}
            mt="1"
            fontWeight="bold"
            as="h3"
            lineHeight="tight"
            noOfLines={1}
          >
            {brand}
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            // as="h6"
            lineHeight="tight"
            noOfLines={1}
            textAlign={"center"}
          >
            {description}
          </Box>

          <LinkOverlay as={Link} to={`/singleShoe/${id}`} />

          <Box textAlign={"center"}>
            <Box as="span" color="black" fontSize="lg">
              ₹
            </Box>
            <Text fontSize="4xl">{price}</Text>
          </Box>
          <Box pb={2} textAlign={"center"}>
            <AlertDialogue text="Add To Cart" />
          </Box>

          {price < 800 ? (
            <Box
              border={"1px solid red"}
              as="span"
              color="white"
              fontSize="sm"
              bg={"red.500"}
              p={"5px"}
              textAlign={"center"}
              position={"relative"}
              right={"-15px"}
              pl={10}
              pr={10}
            >
              Deal Of the Day
            </Box>
          ) : null}

          <Box textAlign={"center"} ml={"50px"}>
            <Box display="flex" mt="2" alignItems="center">
              {Array(Math.floor(Math.random() * 2) + 3)
                .fill(4)
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i > rating ? "teal.500" : "orange.500"}
                  />
                ))}
              <Box m="auto" as="span" ml="2" color="gray.600" fontSize="sm">
                ({price + Math.floor(Math.random() * 101) + 200}) reviews
              </Box>
            </Box>
          </Box>

          <Box as="span" ml="2" color="black" fontSize="sm">
            Free Delivery By Amazon
          </Box>
          <Box position={"relative"} left={"25%"}>
            <Image
              h="25px"
              w="100px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-tmgHm-nDxpF2BPOVNxp0K-b40lsONZnaQ&usqp=CAU"
              alt={image}
            />
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
}
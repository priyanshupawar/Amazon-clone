import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Checkbox, Heading } from "@chakra-ui/react";
import { getShoesDataAction } from "../Redux/ShoesReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../Styling/SideBar.module.css";
import { StarIcon } from "@chakra-ui/icons";

const brands = [];

export default function SideBar() {
  const [brandSearch, setBrandSearch] = React.useState([]);
  const [PriceUnder, setPriceUnder] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("");

  const dispatch = useDispatch();
  const stores = useSelector((store) => store.ShoesReducer.shoes);

  React.useEffect(() => {
    dispatch(getShoesDataAction(brandSearch, PriceUnder, sortBy));
  }, [brandSearch, PriceUnder, sortBy]);

  //Mapping the brands
  for (let key of stores) {
    if (brands.includes(key.brand)) {
      continue;
    }
    brands.push(key.brand);
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      setBrandSearch([...brandSearch, e.target.value]);
    } else {
      let newBrandList = brandSearch.filter((ele) => ele !== e.target.value);
      setBrandSearch(newBrandList);
    }
  };

  const PriceUnder300 = () => {
    setPriceUnder([0, 300]);
    // dispatch(getShoesDataAction(PriceUnder));
  };

  const PriceUnder500 = () => {
    setPriceUnder([300, 500]);
    // dispatch(getShoesDataAction(PriceUnder));
  };

  const PriceUnder1000 = () => {
    setPriceUnder([500, 1000]);
    // dispatch(getShoesDataAction(PriceUnder));
  };

  const PriceUnder1500 = () => {
    setPriceUnder([1000, 1500]);
    // dispatch(getShoesDataAction(PriceUnder));
  };

  const PriceUnder1500Above = () => {
    setPriceUnder([1500, 100000]);
    // dispatch(getShoesDataAction(PriceUnder));
  };

  return (
    <Container>
      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Brand
        </Heading>
        {brands.map((brand) => (
          <div key={brand}>
            <Checkbox
              className={Styles.SideBar__Text}
              size="md"
              value={brand}
              onChange={handleChange}
              border="grey"
            >
              <Text fontSize="sm">{brand}</Text>
            </Checkbox>
            <br />
          </div>
        ))}
      </Box>
      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Price
        </Heading>
        <Text
          onClick={PriceUnder300}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          Under ₹300{" "}
        </Text>
        <Text
          onClick={PriceUnder500}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          ₹300 - ₹500
        </Text>
        <Text
          onClick={PriceUnder1000}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          ₹500 - ₹1000
        </Text>
        <Text
          onClick={PriceUnder1500}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          ₹1000 - ₹1500
        </Text>
        <Text
          onClick={PriceUnder1500Above}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          Over ₹1500
        </Text>
      </Box>
      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color="teal" as="h5" size="sm">
          Customer Review
        </Heading>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Box className={Styles.SideBar__Text} key={i}>
              {[...Array(5)].map((_, j) => (
                <StarIcon
                  borderColor="red"
                  color={i >= j ? "orange.500" : "gray.300"}
                />
              ))}
              & Up
            </Box>
          ))}
      </Box>
      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Sort By Price
        </Heading>
        <Text
          onClick={() => setSortBy("asc")}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          asc
        </Text>
        <Text
          onClick={() => setSortBy("desc")}
          className={Styles.SideBar__Text}
          fontSize="sm"
        >
          desc
        </Text>
      </Box>
      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Material
        </Heading>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Cotton
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Denim
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Faux Fur
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Leather
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Net
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          Rubber
        </Text>
      </Box>

      <Box boxShadow="md" m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Discount
        </Heading>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          10% Off or more
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          25% Off or more
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          35% Off or more
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          50% Off or more
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          60% Off or more
        </Text>
        <Text className={Styles.SideBar__Text} fontSize="sm">
          70% Off or more
        </Text>
      </Box>
    </Container>
  );
}
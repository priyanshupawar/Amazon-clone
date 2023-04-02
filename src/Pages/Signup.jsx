import logo from "../images/logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { auth } from "../firebase";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [submitButton, setSubmitButton] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [showError, setShowError] = useState(false);

  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleSubmit = () => {
    if (!values.Name || !values.Email || !values.Password) {
      setShowError(true);
      setErrorMsg("*Fill all fiels");
      return;
    }
    setShowError(false);
    setErrorMsg("");
    setSubmitButton(true);

    createUserWithEmailAndPassword(auth, values.Email, values.Password)
      .then(async (res) => {
        setSubmitButton(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.Name,
        });
        navigate("/login");
        console.log(user);
      })
      .catch((err) => {
        setSubmitButton(false);
        setShowError(true);
        setErrorMsg("Already have account with email");
        console.log("Error:", err.message);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create Account
          </Heading>
          <Image src={logo} w={"15%"} />
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, Name: e.target.value }))
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, Lname: e.target.value }))
                    }
                  />
                </FormControl>
              </Box>
            </HStack>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, Email: e.target.value }))
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, Password: e.target.value }))
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* <FormControl id="password" isRequired>
                <FormLabel>Confirrm password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl> */}
            <Stack spacing={10} pt={2}>
              {/* <p style={{color:"red" ,fontWeight:"bold",textAlign:"center"}}>{errorMsg}</p> */}
              {showError ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>{errorMsg}</AlertTitle>
                </Alert>
              ) : (
                <hr />
              )}
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"yellow.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={handleSubmit}
                isDisabled={submitButton}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?
                <Link
                  to="/login"
                  style={{ color: "blue", margin: "5px", fontWeight: "bold" }}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

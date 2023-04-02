import logo from "../images/logo.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [submitButton, setSubmitButton] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [showError, setShowError] = useState(false);

  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = () => {
    if (!values.Email || !values.Password) {
      setShowError(true);
      setErrorMsg("*Fill all fiels");
      return;
    }
    setShowError(false);
    setErrorMsg("");
    setSubmitButton(true);

    signInWithEmailAndPassword(auth, values.Email, values.Password)
      .then(async (res) => {
        setSubmitButton(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButton(false);
        setShowError(true);
        
        setErrorMsg(err.message);
        console.log("Error:", err.message);
      });
  };

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        width={"100%"}
        bg={useColorModeValue("gray.50", "gray.800")}
      ></Flex>

      <Flex
        minH={"50vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Image src={logo} width={"15%"} />
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
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
                      setValues((prev) => ({
                        ...prev,
                        Password: e.target.value,
                      }))
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
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link
                    to={"/signup"}
                    style={{ color: "blue", fontWeight: "bold" }}
                  >
                    Create account
                  </Link>
                </Stack>
                {showError ? (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>{errorMsg}</AlertTitle>
                  </Alert>
                ) : (
                  <hr />
                )}
                <Button
                  bg={"yellow.400"}
                  color={"white"}
                  _hover={{
                    bg: "yellow.500",
                  }}
                  onClick={handleSubmit}
                  isDisabled={submitButton}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
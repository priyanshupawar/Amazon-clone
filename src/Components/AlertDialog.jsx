import {
    useDisclosure,
    Button,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogBody,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function AlertDialogue({ text }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
  
    // Define a function to close the AlertDialog after 1 second
    const handleClose = () => {
      setTimeout(() => {
        onClose();
      }, 500); // 1 second delay
    };
  
    return (
      <>
        <Button
          size={"sm"}
          color={"black"}
          bg={"hsl(50,90%,54%)"}
          colorScheme="yellow"
          onClick={() => {
            onOpen();
            handleClose();
          }}
        >
          {text}
        </Button>
        <AlertDialog
          motionPreset="scale"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogContent
            alignContent="center"
            justifyContent="center"
            position="fixed"
            bottom="0"
            width="100%"
            bg={"green.400"}
          >
            <AlertDialogHeader>Added To Cart</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>Your product is added to your cart.</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
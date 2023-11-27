import React from "react";
import {
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
function SecurityCon() {
  const containerStyles = {
    // display: "flex",
    mx: { base: "full", sm: "100%", md: "95%", lg: "90%", xl: "80%" },
    w: "100%",
    px: "4em",
    // py:"em",
    justifyContent: "space-evenly",
    // borderWidth: "thin",
  };
  const ImgStyle = {
    alt: "Header image",
    objectFit: "cover",
    h: { md: "30em", lg: "20em", xl: "30em" },
    // w: "30em",
    // h: "25em",
  };
  return (
    <>
  
      <HStack
        sx={containerStyles}
        // ml={{ base: "0", md: "5%", lg: "10%", xl: "20%" }}
        wrap="wrap"
        my="5em"
       
      >
        <Image
          src="/about21.png"
          sx={ImgStyle}
        
        />
        <VStack
          w={{ base: "100%", md: "90%", lg: "40%", xl: "50%" }}
          alignItems={{ base: "center", lg: "flex-start", xl: "flex-start" }}
          p="2%"
        >
            <Heading as="h6" size="sm" color="#000000" textTransform="uppercase">
              In love with React & Next
            </Heading>
          <Heading size="xl">Lorem Ipsum is simply dummy</Heading>
          <Divider orientation="horizontal" />
          <Text fontSize="md" mt="10px">
            (lg) In Lorem Ipsum is simply dummy text of the printing andIn is
            simply dummy text of the printing and typesetting industry. Lorem
          </Text>
          
          <HStack w="100%" py="2%" justifyContent="space-between">
            <VStack w="12em">
              <Image
                src="/security/what-is-tia-role-1.png"
                w="8em"
                h="8em"
                borderWidth="thin"
                borderRadius="15px"
              />
              <Heading size="md">Pay for blobspace</Heading>
              <Text fontSize="md" textAlign="center">
              In Lorem Ipsum is simply dummy text of the printing andIn
              </Text>
            </VStack>

            <VStack w="12em">
              {" "}
              <Image
                src="/security/what-is-tia-role-2.png"
                w="8em"
                h="8em"
                borderWidth="thin"
                borderRadius="15px"
              />
              <Heading size="md">Pay for blobspace</Heading>
              <Text fontSize="md" textAlign="center">
              In Lorem Ipsum is simply dummy text of the printing andIn is
            
              </Text>
            </VStack>

            <VStack w="12em">
              {" "}
              <Image
                src="/security/what-is-tia-role-3.png"
                w="8em"
                h="8em"
                borderWidth="thin"
                borderRadius="15px"
              />
              <Heading size="md">Pay blobspace</Heading>
              <Text fontSize="md" textAlign="center">
              In Lorem Ipsum is simply dummy text of the printing a
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      
      {/* <------------------- container --------------------> */}

      <HStack
        sx={containerStyles}
        // ml={{ base: "0", md: "5%", lg: "10%", xl: "20%" }}
        wrap="wrap"
        my="5em"
       
      >
        <VStack
          w={{ base: "100%", md: "90%", lg: "40%", xl: "50%" }}
          alignItems={{ base: "center", lg: "flex-start", xl: "flex-start" }}
          p="2%"
        >
            <Heading as="h6" size="sm" color="#000000" textTransform="uppercase">
              Best Secured in the world
            </Heading>
          <Heading size="xl">The Most Secured Ever Currency</Heading>
          <Divider orientation="horizontal" />

          <Text fontSize="md" mt="10px">
            (lg) In Lorem Ipsum is simply dummy text of the printing andIn is
            simply dummy text of the printing and typesetting industry. Lorem
            (lg) In Lorem Ipsum is simply dummy text of the printing andIn is
            simply dummy text of the printing and typesetting industry.<br/>
            Lorem(lg) In Lorem Ipsum is simply dummy text of the printing andIn is
            simply dummy text of the printing and typesetting industry. Lorem
          </Text>
        
          <Button w="30%" bgColor="#000000" h="3em" color="white">
              Learn More
            </Button>
         
        </VStack>
        <Image
          src="/about3.png"
          sx={ImgStyle}
          borderRadius="15px"
          // boxShadow="xl"
        />
      </HStack>
      


 
    </>
  );
}

export default SecurityCon;

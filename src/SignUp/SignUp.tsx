
import {
  HStack,
  Heading,
  VStack,
  Button,
  Image,
  Spacer,
  FormControl,
  Input,
} from "@chakra-ui/react";
function SignUp() {
  return (
    <>
     
      <HStack
        px={{ base: "0", md: "5%", lg: "10%", xl: "10%" }}
        py="20"
        wrap="wrap"
        bgColor="transparent"
        backdropFilter={"blur(50px)"}
      >
        <VStack
          w={{ base: "100%", md: "90%", lg: "40%", xl: "40%" }}
          m={{ base: "5", md: "20", lg: "32" }}
          mr="0"
          alignItems="flex-start"
        >
          <Heading size="2xl">
            <span style={{ color: "#6C5DD1" }}>Sign up now</span> and get a FREE
            NFT! Limited period offer
          </Heading>

          <HStack w="90%" py="5">
            <FormControl isRequired>
              <Input placeholder="Email" h="3em"bg="white" />
            </FormControl>
            <Button w="30%" bgColor="#000000" h="3em" color="white">
              Sign Up
            </Button>
          </HStack>
        </VStack>
        <Spacer />

          <Image src="/signup.png"   objectFit="cover"
          h={{ md: "30em", lg: "20em", xl: "35em" }} />
      </HStack>
      


      {/* -------------------scorlling bar ------------------------> */}

    </>
  );
}

export default SignUp;

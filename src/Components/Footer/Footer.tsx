import {
  HStack,
  Heading,
  VStack,
  Text,
  Button,
  Image,
  Center,
  Divider,
  Box,
  // List,
  // ListItem,
  // ListIcon,
  Icon,
  FormControl,
  Input,
  Spacer,
} from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaYoutube,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
// import SideBar from "../NavigationBar/NavItem/SideBar";
import SignUp from "../../SignUp/SignUp";

const buttonsOther = [
  { name: "Launch App", link: "https://example.com/button1" },
  { name: "Strategic Vault", link: "https://example.com/button1" },
  { name: "Stats", link: "https://example.com/button1" },
  { name: "Audits", link: "https://example.com/button1" },
  { name: "Careers", link: "https://example.com/button1" },
  // { name: "Branding", link: "https://example.com/button1" },
  // { name: "Terms of Use", link: "https://example.com/button1" },
  // { name: "Privacy Policy", link: "https://example.com/button1" },
];

const buttonsCommunity = [
  { name: "Twitter", link: "https://example.com/button1" },
  { name: "Discord", link: "https://example.com/button1" },
  { name: "Telegram", link: "https://example.com/button1" },
  { name: "Reddit", link: "https://example.com/button1" },
  { name: "News", link: "https://example.com/button1" },
  { name: "Newsletter", link: "https://example.com/button1" },
];
const buttonsDeveloper = [
  { name: "Join Our Rise", link: "https://example.com/button1" },
  { name: "Docs", link: "https://example.com/button1" },
  { name: "Github", link: "https://example.com/button1" },
  { name: "Discord", link: "https://example.com/button1" },
];
function Footer() {
  return (
    <>
      <Box bgImage="/BottomBg.png" bgSize="cover">
        <SignUp />
        <HStack
          justifyContent="space-between"
          alignItems="flex-start"
          py="20"
          // px="20em"
          // borderWidth="thin"
          mx={{ base: "0", md: "2%", lg: "8%", xl: "10%" }}
          // p={5}
          // w="full"
          // h="full"
          color="white"
          bgColor="transparent"
          backdropFilter={"blur(50px)"}
        >
          <VStack w={{base:"100vw", lg: "30%" }} alignItems="flex-start" pl="5" >
            <HStack>
              <Image
                boxSize={10}
                bg="white"
                borderRadius="full"
                objectFit="cover"
                src={"/twoLogo.png"}
                alt="Company logo"
              />
              <Center h={50}>
                <Divider orientation="vertical" />
              </Center>
              <Heading size="lg">Techno</Heading>
            </HStack>
            <Text fontSize="md" pb="2" py="20px">
              Ping us at anytime and our superhuman chat executives will fly in
              to help community.Ping us at anytime and our superhuman chat executives will fly in
              to help community.
            </Text>

           
          </VStack>

          <VStack alignItems="flex-start" p="5px">
            <Heading size="md">Community</Heading>
            {buttonsDeveloper.map((buttonsDeveloper, index) => (
              <Button
                key={index}
                variant="unstyled"
                h="7"
                px="2"
                as="a"
                href={buttonsDeveloper.link}
                target="_blank"
                _hover={{
                  borderWidth: "thin",
                }}
              >
                {buttonsDeveloper.name}
              </Button>
            ))}
          </VStack>

          <VStack alignItems="flex-start" p="5px">
            <Heading size="md">Community</Heading>
            {buttonsCommunity.map((buttonsCommunity, index) => (
              <Button
                key={index}
                variant="unstyled"
                h="7"
                px="2"
                as="a"
                href={buttonsCommunity.link}
                target="_blank"
                _hover={{
                  borderWidth: "thin",
                }}
              >
                {buttonsCommunity.name}
              </Button>
            ))}
          </VStack>

          <VStack alignItems="flex-start" p="5px">
            <Heading size="md">Other</Heading>
            {buttonsOther.map((buttonsOther, index) => (
              <Button
                key={index}
                variant="unstyled"
                h="7"
                px="2"
                as="a"
                href={buttonsOther.link}
                target="_blank"
                _hover={{
                  borderWidth: "thin",
                }}
              >
                {buttonsOther.name}
              </Button>
            ))}
          </VStack>

          <VStack w="25%" alignItems="flex-start" pl="5">
            {/* <Text fontSize="md" pb="2">
              Ping us at anytime and our superhuman chat executives will fly in
              to help community.Ping us at anytime and our superhuman chat
              executives will fly in to help community.
            </Text> */}
            <Heading size="md">Subscribe to Our Newletter</Heading>
            <HStack w="90%" py="5">
            <FormControl isRequired>
              <Input placeholder="Email" h="2.5em"bg="white" borderRadius="25px" />
            </FormControl>
            <Button  bgColor="#000000" h="2.5em" color="white" borderRadius="25px" px="2em">
              Send
              </Button>
          </HStack>
      
          <Divider/>
              <Heading size={"sm"} py="10px">
              Social Media
            </Heading>
            <HStack w="100%" gap="20px">
              <Icon as={FaTwitterSquare} boxSize={7} />
              <Icon as={FaYoutube} boxSize={8} />
              <Icon as={FaFacebook} boxSize={7} />
              <Icon as={FaDiscord} boxSize={8} />
            </HStack>
            {/* <Button
              w={{ base: "7em", lg: "10em" }}
              borderWidth="2px"
              bg="#000000"
              _hover={{
                bg: "#272727",
              }}
              color="white"
            >
              START
            </Button> */}
          </VStack>
        </HStack>
      </Box>
    </>
  );
}

export default Footer;

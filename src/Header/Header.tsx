import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Stack,
  Card,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import NavigationBar from "../Components/NavigationBar/Nav";
import { motion, useInView } from "framer-motion";

const MotionImage = motion(Image)

function Header() { 
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  const btn = {
    bg: "#000000",
    _hover: {
      bg: "#272727",
    },
    color: "white",
  };

  return (
    <Box>

      <VStack
        bgImage="/bgTop.png"
        bgSize="cover"
        bgPosition="center"
        // w="99vw"
        // h="80vh"
       
      >
        <NavigationBar />
        <HStack
          // display="flex"
          wrap="wrap"
          mt="-8px"
          // mx={{ base: "2", md: "6", xl: "10", "2xl": "20" }}
          // my="5"
          py="4em"
          justifyContent="space-evenly"
          // bgColor="transparent"
          backdropFilter={"blur(50px)"}
          // flexDirection={lg:"column"}}
        >
         
          <VStack
            w={{ base: "100%", md: "90%", lg: "50%", xl: "50%" }}
            alignItems={{ base: "center", lg: "flex-start", xl: "flex-start" }}
            p="2%"

            
          >
            <motion.div  initial={{
              x: "-200%"
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 1,
              // type: "spring",
              // stiffness: 700 
            }} >
            <Heading as="h6" size="sm" color="#000000" textTransform="uppercase">
              In love with React & Next
            </Heading>
            <Heading size="4xl">Lorem Ipsum is simply dummy</Heading>

            <Text fontSize="lg" mt="20px">
              (lg) In Lorem Ipsum is simply dummy text of the printing andIn
              Lorem Ipsum is simply dummy text of the printing andIn Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem
            </Text>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#000000" />
                Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#000000" />
                Assumenda, quia temporibus eveniet
              </ListItem>
            </List>
            <HStack mt="25px">
              <Button
               
                w={{ base: "7em", lg: "10em" }}
                borderWidth="2px"
                bg="#000000"
                _hover={{
                  bg: "#272727",
                }}
                color="white"
              >
                START
              </Button>
              <Button
                w={{ base: "7em", lg: "10em" }}
                borderWidth="2px"
                borderColor="#000000"
                _hover={{
                  bg: "#000000",
                  color: "white",
                }}
              >
                Contact
                <ArrowForwardIcon ml="5px" mt="4px" />
              </Button>
              </HStack>
              </motion.div>
          </VStack>
         
          <MotionImage
            src="/HeaderImg.png"
            alt="Header image"
            objectFit="cover"
            h={{ md: "30em", lg: "30em", xl: "35em" }}
            initial={{
              x: "200%"
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 1.5,
              // type: "spring",
              // stiffness: 700 
            }}
          />
        </HStack>
      </VStack>


      {/* ---------------------------second section ----------- */}
       <motion.div  initial={{
              y: "200%"
            }}
            animate={{
              y: 0
            }}
            transition={{
              duration: 1,
              // type: "spring",
              // stiffness: 700 
            }}>
      <HStack
        borderWidth="thin"
        my="2em"
        h={{ base: "full", lg: "15em" }}
        mx={{ base: "full", md: "30", lg: "55", xl: "64", "2xl": "72" }}
        px={10}
        alignItems="center"
        borderRadius="30"
        boxShadow={"xl"}
        wrap="wrap"
      >
        <MotionImage
         
         
          // w={{ base: "", lg: "27%" }}
          // h={{ base: "210px", lg: "220px",xl:"230px" }}

          src="/crypto_set.png"
        ></MotionImage>
        <VStack
          display="flex"
          alignItems="flex-start"
          w={{ base: "full", lg: "45%" }}
        >
          <Heading size="lg">Lorem Ipsum is simply</Heading>
          <Text fontSize="sm">
            (lg) In Lorem Ipsum is simply dummy text of the printing andIn
            Lorem. Lorem Ipsum has been the industry's dummy text ever since the
          </Text>
        </VStack>
        <Spacer />
        <Button sx={btn} w="12em">
          Get Started
          <ArrowForwardIcon ml="5px" />
        </Button>
      </HStack>
      </motion.div>



      {/* -----------------------------------section three-------- */}

      <VStack
        my="10"
        p="2%"
        borderWidth="thin"
        // w="100%"
      >
        <VStack w={{ base: "full", md: "80%", lg: "70%", xl: "50%" }} mt={20}>
          <Heading size="xl" textAlign="center">
            Why Build On{" "}
            <span style={{ color: "#6C5DD1" }}>Martian Blockchain</span>
          </Heading>
          <Text fontSize="2xl" textAlign="center" mx="6px">
            Combine the flexibility and speed of Ethereum smart contract
            development with the interoperability of the Cosmos SDK.
          </Text>
        </VStack>

        {/* ----------------------- Why Build ---------------- */}
        <HStack columnGap={10} wrap="wrap" justifyContent="center">
          <motion.div 
        
            initial={{
              x: "-200%"
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 1,
              // type: "spring",
              // stiffness: 700 
            }} >
          <Card maxW="sm" borderWidth="thin" borderColor="gray.200">
            <CardBody>
              <Image
                src="/Card1.png"
                alt="Green double couch with wooden legs"
                borderRadius="l0"
                px="10"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color="#E2A0E3">
                  Interoperable
                </Heading>
                <Text>
                  A highly-scalable and secure Cosmos SDK blockchain that
                  connects Kava to the 30 chains and $60B+ of the Cosmos
                  ecosystem via the IBC protocol.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </motion.div>


          <motion.div initial={{
              y: "200%"
            }}
            animate={{
              y: 0
            }}
            transition={{
              duration: 1,
              // type: "spring",
              // stiffness: 700 
            }} >
          <Card
            maxW="sm"
            mt={{ base: "0", xl: "28" }}
            borderWidth="thin"
            borderColor="gray.200"
            bgGradient='linear(red.50 0%, orange.50 25%, yellow.50 50%)'
          >
            <CardBody>
              <Image
                src="/Card2.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                px="10"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color="#E2A0E3">
                  EVM Compatible
                </Heading>
                <Text>
                  An EVM-compatible execution environment that empowers Solidity
                  developers and their dApps to benefit from the scalability and
                  security of the Kava Network.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </motion.div>

        <motion.div initial={{x:"200%"}} animate={{x:0}} transition={{duration:1}} >
          <Card maxW="sm" borderWidth="thin" borderColor="gray.200">
            <CardBody>
              <Image
                src="/Card3.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                px="10"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color="#E2A0E3">
                  Scalable
                </Heading>
                <Text>
                  With single block finality and unrivalled scalability,
                  Tendermint Consensus enables Kava to support the transaction
                  needs of thousands of protocols and millions of users.
                </Text>
              </Stack>
            </CardBody>
            </Card>
            </motion.div>
        </HStack>
      </VStack>

    </Box>
  );
}

export default Header;

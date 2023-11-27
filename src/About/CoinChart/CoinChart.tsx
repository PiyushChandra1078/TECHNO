import React, { useState } from "react";
import {
    HStack,
    Heading,
    VStack,
    Text,
    Image,
    ListItem,
    UnorderedList,
  } from "@chakra-ui/react";
function CoinChart() {
    const [imageSrc, setImageSrc] = useState<string>(
        "/Charts/stakeholders-1.png"
      ); 
    
      const handleHover = (newImageSrc: string) => {
        setImageSrc(newImageSrc);
      };
    const containerStyles = {
        display: "flex",
        w: { base: "full", sm: "100%", md: "95%", lg: "90%", xl: "80%" },
        py: "2em",
    
        justifyContent: "space-evenly",
        // borderWidth: "thin",
      };
  return (
      <>
          
        <HStack
          sx={containerStyles}
          mt="5em"
          wrap="wrap"
          borderRadius="15"
          // bgColor="transparent"
          // backdropFilter={"blur(90px)"}
          // mr={{ base: "0", md: "5%", lg: "10%", xl: "20%" }}
        // bgGradient="linear(to-br, transparent,#9913F0)"
        bgGradient='linear(red.50 0%, orange.100 25%, yellow.100 40%)'
        >
          <HStack w="100%" p="2%">
            <VStack alignItems="flex-start">
              <Heading size="xl">
                Buy Cryptos AT{" "}
                <span style={{ color: "#6C5DD1" }}>True Const </span>
              </Heading>
              <Text fontSize="lg" mt="10px">
                Buy and sell 100+ cryptocurrencies with 20+ fait currencies
                using bank transfers or your credit/debit card.
              </Text>
            </VStack>
          </HStack>

          <HStack justifyContent="space-between" w="30%" display="flex">
            <UnorderedList w="100%" style={{ listStyleType: "none" }}>
              <ListItem
                py="15"
                fontSize="2xl"
                fontWeight="500"
                borderBottom="thin"
                borderColor="white"

                // onMouseEnter={() => handleHover("/Charts/stakeholders-1.png") }
              >
                Lorem amet
              </ListItem>
              <ListItem
                py="15"
                fontSize="2xl"
                fontWeight="500"
                onMouseEnter={() => handleHover("/Charts/stakeholders-2.png")}
              >
                Consectetur adipiscing
              </ListItem>
              <ListItem
                py="15"
                fontSize="2xl"
                fontWeight="500"
                onMouseEnter={() => handleHover("/Charts/stakeholders-3.png")}
              >
                lorem massa
              </ListItem>
              <ListItem
                py="15"
                fontSize="2xl"
                fontWeight="500"
                onMouseEnter={() => handleHover("/Charts/stakeholders-4.png")}
              >
                nisl aliquet
              </ListItem>
              <ListItem
                py="15"
                fontSize="2xl"
                fontWeight="500"
                onMouseEnter={() => handleHover("/Charts/stakeholders-5.png")}
              >
                Facilisis
              </ListItem>
              <ListItem>
                <HStack pt="5">
                  <VStack mr="20">
                    <Heading as="h6" size="sm">
                      Price Now
                    </Heading>
                    <Text
                      color="yellow.500"
                      fontWeight="600"
                      size="lg"
                      fontSize="19px"
                    >
                      1BC = 2 $
                    </Text>
                  </VStack>

                  <VStack>
                    <Heading as="h6" size="sm">
                      Total Supply Limit
                    </Heading>
                    <Text
                      color="yellow.500"
                      fontWeight="600"
                      size="lg"
                      fontSize="19px"
                    >
                      36 000 000 BC
                    </Text>
                  </VStack>
                </HStack>
              </ListItem>
            </UnorderedList>
          </HStack>
          <Image src={imageSrc} />
        </HStack>
      </>
  )
}

export default CoinChart
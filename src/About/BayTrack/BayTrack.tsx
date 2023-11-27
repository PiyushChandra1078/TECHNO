import React from "react";
import {
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  ListItem,
  UnorderedList,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function CoinChart() {
  const containerStyles = {
    display: "flex",
    w: { base: "full", sm: "100%", md: "95%", lg: "90%", xl: "80%" },
    py: "4em",

    justifyContent: "space-evenly",
    // borderWidth: "thin",
  };
  const CoinIcon = { h: "10", w: "10" };

  const coinData = [
    {
      name: 'Bitcoin',
      imageSrc: '/coinIcon/bitcoin-btc-logo.svg',
      price: '$32.553',
      percentage: '27.36%',
    },
    {
      name: 'Ethereum',
      imageSrc: '/coinIcon/ethereum-eth-logo.svg',
      price: '$25.670',
      percentage: '18.36%',
    },
    {
      name: 'Litecoin',
      imageSrc: '/coinIcon/litecoin-cash-lcc-logo.svg',
      price: '$75.370',
      percentage: '19.36%',
    },
    {
      name: 'Dogecoin',
      imageSrc: '/coinIcon/dogecoin-doge-logo.svg',
      price: '$28.670',
      percentage: '12.36%',
    },
    {
      name: 'Monero',
      imageSrc: '/coinIcon/monero-xmr-logo.svg',
      price: '$15.670',
      percentage: '8.36%',
    },
    {
      name: 'Cardano',
      imageSrc: '/coinIcon/cardano-ada-logo.svg',
      price: '$45.670',
      percentage: '20.36%',
    },
    // ... Add data for other coins
  ];
  return (
    
    <>
      <HStack
        sx={containerStyles}
        // mr={{ base: "0", md: "5%", lg: "10%", xl: "20%" }}
        wrap="wrap"
        mb="2em"
      >
        <VStack
          // w={{ base: "100%", md: "90%", lg: "40%", xl: "50%" }}
          w="100%"
          p="2%"
        >
          <Heading as="h6" size="sm" color="#000000" textTransform="uppercase">
              Secured Digital Money
            </Heading>
          <Heading size="xl">Use Money with Confidence</Heading>

          <Text fontSize="lg" mt="10px" textAlign="center">
            (lg) In Lorem Ipsum is simply dummy text of the printing andIn Lorem
            Ipsum is simply dummy text of the printing andIn Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2,xl: 2 ,"2xl":3}} gap={6} w="100%">
      {coinData.map((coin, index) => (
        <Box
          key={index}
          // boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
          borderWidth="thin"
        >
          <HStack justifyContent="space-between">
            <VStack p="1em">
              <Image src={coin.imageSrc} sx={CoinIcon} />
              <StatGroup>
                <Stat>
                  <StatLabel>{coin.name}</StatLabel>
                  <StatNumber>{coin.price}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    {coin.percentage}
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </VStack>
            <Image
              m="10px"
              src="/LineChart.png"
              w={{ base: '15em',sm:"13em", md: '15em', lg:"20em", xl:"18em"}}
              objectFit="cover"
              h="8.5em"
            />
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
        {/* <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
      {coinData.map((coin, index) => (
        <GridItem
          key={index}
          w="100%"
          h="40"
          // boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
          borderWidth="thin"
        >
          <HStack justifyContent="space-between">
            <VStack p="1em">
              <Image src={coin.imageSrc} sx={CoinIcon} />
              <StatGroup>
                <Stat>
                  <StatLabel>{coin.name}</StatLabel>
                  <StatNumber>{coin.price}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    {coin.percentage}
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </VStack>
            <Image
              m="10px"
              src="/LineChart.png"
              w="20em"
              h="8.5em"
            />
          </HStack>
        </GridItem>
      ))}
    </Grid> */}
        {/* <Image src="/about3.png" sx={ImgStyle} /> */}
        {/* <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
          <GridItem
            w="100%"
            h="40"
            boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/bitcoin-btc-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Bitcoin</StatLabel>
                    <StatNumber>$32.553</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      27.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="40"
            boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/ethereum-eth-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Ethereum</StatLabel>
                    <StatNumber>$25.670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      18.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="40"
            boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            {" "}
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/litecoin-cash-lcc-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Litecoin</StatLabel>
                    <StatNumber>$75.630</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      19.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="40"
            // boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            {" "}
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/dogecoin-doge-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Dogecoin</StatLabel>
                    <StatNumber>$54.270</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      26.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="40"
            // boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/monero-xmr-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Monero</StatLabel>
                    <StatNumber>$34.470</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      20.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>

          <GridItem
            w="100%"
            h="40"
            // boxShadow="0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)"
            borderWidth="thin"
          >
            {" "}
            <HStack justifyContent="space-between">
              <VStack p="1em">
                <Image src="/coinIcon/cardano-ada-logo.svg" sx={CoinIcon} />
                <StatGroup>
                  <Stat>
                    <StatLabel>Cardano</StatLabel>
                    <StatNumber>$45.670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      20.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </VStack>
              <Image
                m="10px"
                src="/LineChart.png"
                w="20em"
                h="8.5em"
                // shadow="md"

                // borderRadius="15px"
              />
            </HStack>
          </GridItem>
        </Grid> */}
      </HStack>
    </>
  );
}

export default CoinChart;

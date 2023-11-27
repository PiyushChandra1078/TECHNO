import React from "react";
import { HStack, Image } from "@chakra-ui/react";

function IconLine() {

  const CoinIcon = { h: "10", w: "10" };
  return (
    <>
      <HStack
        // w={{ base: "full", md: "85%", lg: "75%", xl: "65%" }}
        // w="100%"
        // ml={{ base: "full", lg: "20%" }}
        //  id="images-container"
        w="100%"
        overflowX="hidden"
        mb="20"
        // bg="gray.100"
        borderWidth="thin"
        p="5"
        spacing={5}
        justifyContent="space-evenly"
        // h="100vh"
        backdropFilter={"blur(90px)"}
      >
        {" "}
        <Image src="/coinIcon/bitcoin-btc-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/bnb-bnb-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/dogecoin-doge-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/ethereum-eth-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/polygon-matic-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/shiba-inu-shib-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/solana-sol-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/tether-usdt-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/tron-trx-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/usd-coin-usdc-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/xrp-xrp-logo.svg" sx={CoinIcon} />
        <Image
          src="/coinIcon/multi-collateral-dai-dai-logo.svg"
          sx={CoinIcon}
        />
        <Image src="/coinIcon/stellar-xlm-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/avalanche-avax-logo.svg" sx={CoinIcon} />
        <Image src="/coinIcon/unus-sed-leo-leo-logo.svg" sx={CoinIcon} />
        {/* </Box> */}
      </HStack>
    </>
  );
}

export default IconLine;

// import React, { useState } from "react";
import IconLine from "./IconList/IconLine";
import SecurityCon from "./SecurityCon/SecurityCon";
import BayTrack from "./BayTrack/BayTrack";
// import CoinChart from "./CoinChart/CoinChart";
import {
  VStack,
} from "@chakra-ui/react";
function About() {
  return (
    <>
      <VStack>
        <IconLine />
         {/* <CoinChart/> */}
        <SecurityCon />
        <BayTrack/>
      </VStack>
    </>
  );
}

export default About;

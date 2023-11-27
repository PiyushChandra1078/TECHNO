import { HStack, Spacer } from '@chakra-ui/react';
import NavItem from './NavItem/NavItem';
import LoginBtn from './LoginBTN/LoginBtn';
import LogoTitle from './Logo/Logo';

function NavigationBar() {
  return (
    <HStack p={2} w="full"  bgColor="transparent"
    backdropFilter={"blur(50px)"} >
      {/* <HStack p={5} borderWidth="thin" borderRadius="full" w="full" boxShadow={"sm"}> */}
      <HStack p={5} w="100%">
        <LogoTitle />
        <Spacer />
        <NavItem />
        <LoginBtn />
      </HStack>
    </HStack>
  );
}

export default NavigationBar;

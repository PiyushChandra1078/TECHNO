
import { Box, Button, HStack, Hide } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import SideBar from '../NavItem/SideBar';
function LoginBtn() {
  return (
    <HStack>
      <Hide below='md'>
      <Button colorScheme='green' bg="green.300" _hover={{
        bg: "green.400"
        }} borderRadius={"3xl"}>Login</Button>
      </Hide>
      <Hide below="sm">
        <Button colorScheme='twitter' borderRadius={"3xl"}>Get Started</Button>
      </Hide>
        <Box display={{base:"flex",lg:"none"}}>
        <SideBar />
        </Box>
        <Hide below="sm">
        
        <ColorModeSwitcher />
        </Hide>
    </HStack>
  );
}

export default LoginBtn;

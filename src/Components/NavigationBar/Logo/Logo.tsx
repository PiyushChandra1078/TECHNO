
import { Center, Divider, HStack, Heading, Image } from '@chakra-ui/react';
function LogoTitle() {
  return (
    <HStack cursor="pointer" >
      <Image
        bg="white"
        boxSize={12}
        borderRadius="full"
        objectFit="cover"
        src={"/twoLogo.png"}
        alt="Company logo"
      />
      <Center h={50}>
        <Divider orientation='vertical' />
      </Center>
      <Heading size="lg">Techno</Heading>
    </HStack>
  );
}

export default LogoTitle;

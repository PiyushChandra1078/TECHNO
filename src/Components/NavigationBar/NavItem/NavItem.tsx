
import {
  Link,
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  HStack,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  MdRocket,
  MdWindow,
  MdCloud,
  MdFileCopy,
  MdMessage,
  MdShare,
} from "react-icons/md";

function NavItem() {
  return (
    <>
      <HStack display={{base:"none",lg:"flex"}}>
        <Button bg="transparent">Ecosystem</Button>
        <Popover>
          <PopoverTrigger>
            <Button background="transparent" >Developers</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Link display="flex" py="2">
                  <Icon as={MdWindow} boxSize={5} mr="3" />
                  Build with Us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdRocket} boxSize={5} mr="3" /> Join us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdCloud} boxSize={5} mr="3" />
                  Validator Incentives
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdFileCopy} boxSize={5} mr="3" />
                  Build with Us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdShare} boxSize={5} mr="3" />
                  Join us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdMessage} boxSize={5} mr="3" />
                  Validator Incentives
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button background="transparent">Trigger</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Link display="flex" py="2">
                  <Icon as={MdWindow} boxSize={5} mr="3" />
                  Build with Us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdRocket} boxSize={5} mr="3" /> Join us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdCloud} boxSize={5} mr="3" />
                  Validator Incentives
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdFileCopy} boxSize={5} mr="3" />
                  Build with Us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdShare} boxSize={5} mr="3" />
                  Join us
                </Link>
                <Link display="flex" py="2">
                  <Icon as={MdMessage} boxSize={5} mr="3" />
                  Validator Incentives
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Button bg='transparent'>Community</Button>
      </HStack>
    </>
  );
}

export default NavItem;

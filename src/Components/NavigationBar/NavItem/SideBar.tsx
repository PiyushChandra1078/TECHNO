import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  VStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import LogoTitle from "../Logo/Logo";
import { RxDashboard } from "react-icons/rx";

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = {
    borderRadius: "md",
    // borderWidth: 'thin',
    px: "3",
    py: "5px",
    h: "9",
    w: "110px",
    ml: "5px",
    fontWeight: "bold",
    fontSize: "15px",
  };
  // useDisclosure
  return (
    <>
      <Icon
        as={RxDashboard}
        boxSize={8}
        onClick={onOpen}
        cursor={"pointer"}
      ></Icon>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerContent
          borderLeftRadius="50px"
          borderLeftWidth="thick"
          borderLeftColor="purple.300"
          bgColor="transparent"
          backdropFilter={"blur(50px)"}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <LogoTitle />
            <Divider />
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Box sx={navLinks}>
                <Link href="#">Ecosystem</Link>
              </Box>
              <Box sx={navLinks}>
                <Menu isLazy>
                  <MenuButton fontWeight="bold">Developers</MenuButton>
                  <MenuList
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box sx={navLinks}>
                <Menu isLazy>
                  <MenuButton fontWeight="bold">Individuals</MenuButton>
                  <MenuList px="25px" py="20px" w="20em">
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Link> Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>
                        <ChatIcon mr="10px" />
                        Join us
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box sx={navLinks}>
                <Link href="#">Community</Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;

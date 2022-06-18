import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useAuthContext } from "../utils/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/UserProvider";

const Header = () => {
  const auth = useAuthContext();
  const { user, loggedIn } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const ignoredPaths = ["/login", "/signup"];
    if (!loggedIn && !ignoredPaths.includes(location?.pathname)) {
      navigate("/login");
    }
  }, [location?.pathname, loggedIn, navigate]);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("light", "#161717")} px={4}>
        <Flex h={"80px"} alignItems={"center"} justifyContent={"space-between"}>
          {/*Navbar Logo */}
          <Image src={"image/logo.png"} h="50px" alt=" navbar company logo" />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <Button as="a" href="/">
                  Home
                </Button>

                <Button as="a" href="/dashboard">
                  Dashboard
                </Button>

                <Button as="a" href="/aboutUs">
                  About Us
                </Button>

                <Button as="a" href="/FAQ">
                  FAQ
                </Button>

                {/* Dark/light mode button */}
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  {/* Navbar visible avatar */}
                  {user?.profilePic && (
                    <Avatar size={"md"} src={user?.profilePic} />
                  )}
                </MenuButton>

                <MenuList alignItems={"center"}>
                  {/*Logout Button */}
                  {/*<MenuItem>Logout</MenuItem>*/}
                  <Center padding={"10px"}>
                    <button
                      justifyContent={"center"}
                      onClick={() => {
                        auth.logout();
                      }}
                    >
                      Logout{" "}
                    </button>
                  </Center>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;

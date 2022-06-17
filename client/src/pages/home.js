import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import GetPosts from "../components/getPosts";
import { useAuthContext } from "../utils/AuthProvider";
// import "../signUp.css";

const Home = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate("/login");
    }
  }, [auth, navigate]);

  // Return the Homepage
  return (
    <div>
      <GetPosts />
      <br />

      <Link to={"/createPost"}>
        <Flex
          padding={"20px"}
          justifyContent={"right"}
          position={"fixed"}
          right={"0"}
          bottom={"0"}
        >
          <Button
            /* flex={1} */
            px={6}
            h={"90px"}
            fontSize={"6xl"}
            rounded={"full"}
            bgGradient="linear(to-r, #008900, #70cb00)"
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "yellow.500",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            _focus={{
              bg: "blue.500",
            }}
            style={{ aspectRatio: 1 }}
          >
            +
          </Button>
        </Flex>
      </Link>
    </div>
  );
};

export default Home;

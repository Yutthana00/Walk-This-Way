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
      <h1>Welcome</h1>
      <GetPosts />

      <Link to={"/dashboard"}>
        <button>Go To Your Dashboard</button>
      </Link>

      <br />

      <Link to={"/createPost"}>
        <Flex
          margin="5"
          justifyContent="right"
          alignItems="right"
          position="sticky"
        >
          <Button
            /* flex={1} */
            px={4}
            fontSize={"sm"}
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
          >
            Post
          </Button>
        </Flex>
      </Link>

      <br />
      <button
        onClick={() => {
          auth.logout();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;

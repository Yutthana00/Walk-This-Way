import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// If a page hasn't loaded correctly or there is an error, display this error page
const Error = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      {/* 404 title */}
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, #008900, #70cb00)"
        backgroundClip="text"
      >
        404
      </Heading>
      {/* Descriptions  */}
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist.
        <br />
        Go back and try again!
      </Text>

      {/* Return to homepage button using link component to allow the user to navigate. */}
      <Link to={"/"}>
        <Button
          colorScheme="yellow"
          bgGradient="linear(to-r, #008900, #70cb00)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default Error;

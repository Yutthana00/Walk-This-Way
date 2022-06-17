import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Card = ({ post }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"500px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
      <Stack direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.300"} fontWeight={600}>{post.author}</Text>
            <Text color={"gray.500"}>Feb 08, 2021 </Text>
          </Stack>
        </Stack>

        <Box

          bg={"gray.100"}
          mt={6}
          mx={-6}
          mb={4}
          pos={"relative"}
        >
          <Image src={post.image} layout={"fill"} />
        </Box>

        <Stack>
          <Box color={"gray.300"} mb={1}>
          <Text
          padding={'5px'}
          color={'green.500'} 
          fontWeight={800}
          fontSize={'md'}
          letterSpacing={1.1}>
            {post.location} · {post.distance}km
          </Text>

          <Text color={'gray.500'}h={"8"}> websirte: {post.website}</Text>
          
          <Text
          color={"gray.300"}
          fontSize={"15px"}>
          {post.description}</Text>
          </Box>
          </Stack>
        
      </Box>
    </Center>
  );
};

export default Card;

// eslint-disable-next-line react-hooks/rules-of-hooks
// color={useColorModeValue("gray.700", "white")}
// fontSize={"2xl"}
// fontFamily={"body"}

// <Text
// color={"gray.400"}
// textTransform={"uppercase"}
// fontWeight={800}
// fontSize={"sm"}
// letterSpacing={1.1}
// >
// Blog
// </Text>
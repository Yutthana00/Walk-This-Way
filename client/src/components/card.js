import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
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
        bg={useColorModeValue("gray.100", "#161717")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack direction={"row"} spacing={4} align={"center"}>
          {post?.author?.profilePic && (
            <Avatar src={post?.author?.profilePic} alt={"Author"} />
          )}
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.600"} fontWeight={600}>
              {post.author.username}
            </Text>
            <Text color={"gray.500"}>{post.website}</Text>
          </Stack>
        </Stack>

        <Box bg={"gray.100"} mt={6} mx={-6} mb={4} pos={"relative"}>
          <Image src={post.image} layout={"fill"} />
        </Box>

        <Stack>
          <Box color={"gray.300"} mb={1}>
            <Text
              padding={"5px"}
              color={"#70cb00"}
              fontWeight={700}
              fontSize={"md"}
              letterSpacing={1.1}
            >
              {post.location} · {post.distance}km
            </Text>

            <Text color={"gray.500"} h={"8"}>
              {post.author.username}
            </Text>

            <Text color={"gray.600"} fontSize={"15px"}>
              {post.description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;

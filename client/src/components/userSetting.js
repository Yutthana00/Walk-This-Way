import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const UserSetting = ({ user }) => {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            {user?.profilePic && (
              <Avatar
                size={"xl"}
                src={user?.profilePic}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            )}
          </Flex>

          {/* USERNAME DISPLAY */}
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                @{user.username}
              </Heading>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{user.postCount}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Posts
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default UserSetting;

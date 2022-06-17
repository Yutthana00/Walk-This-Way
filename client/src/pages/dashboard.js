import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import GetUserPosts from "../components/singleUserPosts";
import UserSetting from "../components/userSetting";
import ProfilePic from "../components/profilePic";

import { useUserContext } from "../utils/UserProvider";
// This page displays the User's Settings, Post's & Private information
const Dashboard = () => {
  const [isProfilePicVisible, setIsProfilePicVisible] = useState(false);

  const { user, loading, refetchUser } = useUserContext();
  if (!user) {
    return <div> loading... </div>;
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* TITLE */}
      <Heading
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        fontSize={"4xl"}
        spacing={0}
        align={"center"}
      >
        Profile Dashboard
      </Heading>

      <UserSetting user={user} />
      <br />

      <button onClick={() => setIsProfilePicVisible(!isProfilePicVisible)}>
        Change Profile Picture
      </button>

      <h2> Previous Posts:</h2>
      <GetUserPosts />

      {isProfilePicVisible && (
        <ProfilePic
          setIsProfilePicVisible={setIsProfilePicVisible}
          refetchUsers={refetchUser}
        />
      )}

      <button>Delete Account</button>
    </div>
  );
};

export default Dashboard;

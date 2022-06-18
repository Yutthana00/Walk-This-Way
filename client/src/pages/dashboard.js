import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import GetUserPosts from "../components/singleUserPosts";
import UserSetting from "../components/userSetting";
import ProfilePic from "../components/profilePic";

import { useUserContext } from "../utils/UserProvider";
// This page displays the User's Settings, Post's & Private information
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../utils/mutations";
import { useAuthContext } from "../utils/AuthProvider";
import { useNavigate } from "react-router-dom";
// This page displays the User's information and Posts, and the user can delete their account here
const Dashboard = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();
  //useState used here to render "change profile pic" visible when button is clicked
  const [isProfilePicVisible, setIsProfilePicVisible] = useState(false);
  const [deleteUser] = useMutation(DELETE_USER);

  const { user, setLoggedIn, loading, refetchUser } = useUserContext();
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
        Add/Change Profile Picture
      </button>

      <GetUserPosts />

      {isProfilePicVisible && (
        <ProfilePic
          setIsProfilePicVisible={setIsProfilePicVisible}
          refetchUsers={refetchUser}
        />
      )}

      <button
        onClick={async () => {
          //when account is deleted, the user is logged out and redirected to the login page
          await deleteUser();
          auth.logout();
          setLoggedIn(false);
          navigate("/login");
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import GetUserPosts from "../components/singleUserPosts";
import UserSetting from "../components/userSetting";
import ProfilePic from "../components/profilePic";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
// This page displays the User's Settings, Post's & Private information
const Dashboard = () => {
  const [isProfilePicVisible, setIsProfilePicVisible] = useState(false);
  const { loading, data, refetch } = useQuery(GET_ME);

  const user = data?.me || {};

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1> Here is your dashboard </h1>
      <h2> Your Profile</h2>
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
          refetchUsers={refetch}
        />
      )}
      <button>Delete Account</button>
    </div>
  );
};

export default Dashboard;

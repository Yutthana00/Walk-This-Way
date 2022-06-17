import React, { useState } from "react";
import GetUserPosts from "../components/singleUserPosts";
import UserSetting from "../components/userSetting";
import ProfilePic from "../components/profilePic";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";
import { useAuthContext } from "../utils/AuthProvider";
import { useNavigate } from "react-router-dom";
// This page displays the User's information and Posts, and the user can delete their account here
const Dashboard = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();
  //useState used here to render "change profile pic" visible when button is clicked
  const [isProfilePicVisible, setIsProfilePicVisible] = useState(false);

  const { loading, data, refetch } = useQuery(GET_ME);
  const [deleteUser] = useMutation(DELETE_USER);

  const user = data?.me || {};

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1> Here is your dashboard </h1>
      {<UserSetting user={user} />}
      <button onClick={() => setIsProfilePicVisible(!isProfilePicVisible)}>
        Add/Change Profile Picture
      </button>
      <GetUserPosts />
      {isProfilePicVisible && (
        <ProfilePic
          setIsProfilePicVisible={setIsProfilePicVisible}
          //refetch is used to repeat the getMe query
          refetchUsers={refetch}
        />
      )}
      <button
        onClick={async () => {
          //when account is deleted, the user is logged out and redirected to the login page
          await deleteUser();
          auth.logout();
          navigate("/login");
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Dashboard;

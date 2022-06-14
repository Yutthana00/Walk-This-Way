import React from "react";
import GetUserPosts from "../components/singleUserPosts";
// import UserSetting from "../components/userSetting";

// This page displays the User's Settings, Post's & Private information
const Dashboard = () => {
  return (
    <div>
      <h1> Here is your dashboard </h1>
      <h2> Your Profile</h2>
      {/* <UserSetting /> */}
      <br />

      <h2> Previous Posts:</h2>
      <GetUserPosts />
    </div>
  );
};

export default Dashboard;

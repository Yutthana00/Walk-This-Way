import React from "react";
import GetUserPosts from "../components/singleUserPosts";

// This page displays the User's Settings, Post's & Private information
const Dashboard = () => {
  return (
    <div>
      <h1> Here is your dashboard </h1>
      <GetUserPosts />
    </div>
  );
};

export default Dashboard;

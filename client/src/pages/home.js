import React from "react";
import auth from "../utils/auth";

// import SignupForm from "./signup";
// import LoginForm from "./login";

import PostForm from "../components/createPost";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <PostForm />
      <button onClick={auth.logout}>logout</button>
    </div>
  );
};

export default Home;

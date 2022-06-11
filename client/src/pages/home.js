import React from "react";
import auth from "../utils/auth";

import SignupForm from "./signup";
import LoginForm from "./login";

import PostForm from "../components/createPost";

const Home = () => {
  return auth.loggedIn ? (
    <div>
      <h1>Welcome</h1>

      <PostForm />
      <button onClick={auth.logout}>logout</button>
    </div>
  ) : (
    <div>
      <LoginForm />
      <p>Don't have an account yet? Sign up below!</p>
      <SignupForm />
    </div>
  );
};

export default Home;

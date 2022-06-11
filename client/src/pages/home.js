import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import SignupForm from "./signup";
import LoginForm from "./login";
import PostForm from "../components/createPost";
import { useAuthContext } from "../utils/AuthProvider";

const Home = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {auth.loggedIn() ? (
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
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;

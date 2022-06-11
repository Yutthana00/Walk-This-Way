import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PostForm from "../components/createPost";
import GetPosts from "../components/getPosts";
import { useAuthContext } from "../utils/AuthProvider";

const Home = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate("/login");
    }
  }, []);

  // Return the Homepage
  return (
    <div>
      <h1>Welcome</h1>

      <PostForm />
      <GetPosts />

      <button onClick={auth.logout}>logout</button>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import GetPosts from "../components/getPosts";
import { useAuthContext } from "../utils/AuthProvider";
// import "../signUp.css";

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
      <GetPosts />

      <Link to={"/dashboard"}>
        <button>Go To Your Dashboard</button>
      </Link>

      <br />

      <Link to={"/createPost"}>
        <button>Want to Create a Post? Click Me</button>
      </Link>

      <br />
      <button onClick={auth.logout}>logout</button>
    </div>
  );
};

export default Home;

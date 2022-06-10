import React from "react";
import auth from "../utils/auth";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={auth.logout}>logout</button>
    </div>
  );
};

export default Home;

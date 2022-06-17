import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../utils/mutations";
import { useAuthContext } from "../utils/AuthProvider";
// import "../signUp.css";

import "../components/image/beach.jpg";

const LoginForm = () => {
  // Hooks need to be in a position where they can load in the same order everytime
  const auth = useAuthContext();
  const navigate = useNavigate();

  // initial useState.
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  if (error) console.log(error);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      // Login the user
      auth.login(data.loginUser.token);
      // ...then navigate them to the homepage
      navigate("/");
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    // Wrapping with Fragments so we return 1 thing instead of 2.
    <>
      <form>
        <div className="form-inner">
          <h2>Login</h2>

          <div className="form-group">
            <label htmlFor="name">UserName</label>
            <input
              name="username"
              value={userFormData.username}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              type="password"
            />
          </div>

          <button className="form-btn" onClick={handleFormSubmit}>
            Login!
          </button>
        </div>
        {/*If button is clicked, it takes me to the signup page */}
        {/* <button className="form-btn" onClick={noAccount}>
        No Account?
      </button> */}
        button
      </form>
      {/* Link will allow us to use interactive navigation to take the user to the signup page */}
      <div className="needAccount">
        <Link to={"/signup"}>
          <button >Need an Account? Sign Up!</button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;

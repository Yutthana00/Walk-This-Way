import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../utils/mutations";

import { Link } from "react-router-dom";
import auth from "../utils/AuthService";
import "../signUp.css";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const [signUp, { error }] = useMutation(SIGNUP);

  if (error) console.log(error);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signUp({
        variables: { ...userFormData },
      });
      auth.login(data.signUp.token);
    } catch (err) {
      console.error(err);
    }
    console.log(userFormData);
    //clear form once submitted
    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form>
        <div className="form-inner">
          <h2>Sign Up</h2>

          <div className="form-group">
            <label htmlFor="name">UserName</label>
            <input
              name="username"
              value={userFormData.username}
              onChange={handleInputChange}
              type="text"
              placeholder=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              type="password"
              placeholder=""
            />
          </div>

          <button className="form-btn" onClick={handleFormSubmit}>
            Sign Up!
          </button>
        </div>
      </form>
      <Link to={"/"}>
        <button> Go Back </button>
      </Link>
    </>
  );
};

export default SignupForm;

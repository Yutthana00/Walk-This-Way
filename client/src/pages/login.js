import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import auth from "../utils/auth";

import "../components/image/beach.jpg";

const LoginForm = () => {
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

      auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
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
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import auth from "../utils/auth";

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
        {error !== "" ? <div className="error">{error}</div> : ""}
        {/* UserName input */}
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={userFormData.username}
          />
        </div>

        {/* password input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={userFormData.password}
          />
        </div>
        {/* login button */}
        <button type="submit" value="LOGIN" onClick={handleFormSubmit}>
          {" "}
          Login{" "}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
// prevent page refresh
// const submitHandler = (e) => {
//   e.preventDefault();

//   loginUser(userFormData);
// };

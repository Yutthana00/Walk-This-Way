import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const [signup, { error }] = useMutation(SIGNUP);

  if (error) console.log(error);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signup({
        variables: { ...userFormData },
      });
      Auth.login(data.signup.token);
    } catch (err) {
      console.error(err);
    }
    //clear form once submitted
    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input
          name="username"
          value={userFormData.username}
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          value={userFormData.password}
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
      </form>
      <button id="form-btn" onClick={handleFormSubmit}>
        Sign Up!
      </button>
    </div>
  );
};

export default SignupForm;

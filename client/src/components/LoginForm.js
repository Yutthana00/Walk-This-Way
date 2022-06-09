import React, { useState } from 'react';
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = ({ Login, error }) => {
  // initial useState.
  const [userDetails, setDetails] = useState({ name: '', email: '', password: '' });
  
//   const [loginUser, { error }] = useMutation(LOGIN_USER);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != '' ? <div className="error">{error}</div> : ''}

    //  UserName input
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...userDetails, name: e.target.value })}
            value={userDetails.name}
          />
        </div>

        // email input
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...userDetails, email: e.target.value })}
            value={userDetails.email}
          />
        </div>

        // password input
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...userDetails, password: e.target.value })
            }
            value={userDetails.password}
          />
        </div>

        // login button
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
// prevent page refresh
const submitHandler = (e) => {
    e.preventDefault();

    Login(userDetails);
  };
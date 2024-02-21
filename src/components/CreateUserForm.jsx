// import { useState } from "react";
// import createUser from "../api/post-create-user";
// import { useNavigate } from "react-router-dom";

export function CreateUserForm() {
  //   const navigate = useNavigate();
  const logfunc = () => console.log("weeee");

  // keep track of username with useState
  // keep track of password with useState

  // update username when value changes
  // update password when value changes

  // validate that email has @something.com

  // when the form is submitted, do the API coolness

  return (
    <form className="form">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={logfunc}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          onChange={logfunc}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={logfunc}
        />
      </div>
      <button type="submit" onClick={logfunc}>
        Create
      </button>
    </form>
  );
}

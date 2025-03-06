import React from "react";
import './Login.css'

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;

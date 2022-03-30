import React from "react";

import "./authentication.css";
import { Link } from "react-router-dom";
export function SignUp() {
  return (
    <div className="authentication-body">
      <div className="login-wrapper signup-wrapper">
        <h3>Sign Up</h3>
        <div className="login-wrapper-content">
          <label for="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Enter your name"
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <label for="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter Password"
          />
          <label for="confirm-pwd">Confirm Password:</label>
          <input
            type="password"
            id="confirm-pwd"
            name="confirm-pwd"
            placeholder="Confirm Password"
          />
          <label>
            <input type="checkbox" />I Accept all terms and Conditions
          </label>
          <button className="btn btn-primary product-card-button">
            Sign Up
          </button>
          <h4>Already Have an Account ?</h4>
          <Link to="/sign-up">Login</Link>
        </div>
      </div>
    </div>
  );
}

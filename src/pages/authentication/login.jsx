import React from "react";

import "./authentication.css";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <div className="authentication-body">
      <div className="login-wrapper">
        <h3>Login</h3>
        <div className="login-wrapper-content">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter Password"
          />
          <div>
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <Link to="/forgot-password">Forgot Your Password ?</Link>
          </div>
          <button className="btn btn-primary product-card-button ">
            Login
          </button>
          <h4>Not a member yet?</h4>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}


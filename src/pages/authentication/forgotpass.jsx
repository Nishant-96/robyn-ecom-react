import React from "react";
import { Link } from "react-router-dom";
export function Forgot() {
  return (
    <div className="authentication-body">
      <div className="login-wrapper">
        <h3>Sign Up</h3>
        <h4>
          To reset your password, enter the email address associated with your
          account.
        </h4>
        <div className="login-wrapper-content">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="btn btn-primary product-card-button check">
            Request Password Reset
          </button>

          <Link to="/login">
            <button className="btn btn-outlined product-card-outlined-btn check">
              Back To Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


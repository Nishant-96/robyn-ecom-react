import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { formValidationSignUp } from "../../utils/validation";
import { useAuth } from "../../context/auth-context";
import "./authentication.css";
export function SignUp() {
  const { signUpHandler } = useAuth();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const signUpClickHandler = (userDetails) => {
    const validation = formValidationSignUp({ ...userDetails });
    try {
      if (validation.type) {
        signUpHandler(
          userDetails.email,
          userDetails.password,
          userDetails.userName,
          userDetails.confirmPass
        );
      } else {
        throw new Error(validation.message);
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="authentication-body">
      <div className="login-wrapper">
        <h3>Sign Up</h3>
        <div className="login-wrapper-content">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Enter your name"
            value={userDetails.userName}
            onChange={(event) =>
              setUserDetails((prev) => ({
                ...prev,
                userName: event.target.value,
              }))
            }
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter Password"
            value={userDetails.password}
            onChange={(event) =>
              setUserDetails((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <label htmlFor="confirm-pwd">Confirm Password:</label>
          <input
            type="password"
            id="confirm-pwd"
            name="confirm-pwd"
            placeholder="Confirm Password"
            value={userDetails.confirmPass}
            onChange={(event) =>
              setUserDetails((prev) => ({
                ...prev,
                confirmPass: event.target.value,
              }))
            }
          />
          <label>
            <input type="checkbox" />I Accept all terms and Conditions
          </label>
          <button
            className="btn btn-primary auth-button"
            onClick={() => signUpClickHandler(userDetails)}
          >
            Sign Up
          </button>
          <h4>Already Have an Account ?</h4>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

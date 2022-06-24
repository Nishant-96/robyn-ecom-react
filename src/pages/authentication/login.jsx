import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { formValidationLogin } from "../../utils/validation";
import { useAuth } from "../../context/auth-context";
import "./authentication.css";
export function Login() {
  const { loginHandler } = useAuth();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginCLickHandler = (userDetails) => {
    const validation = formValidationLogin({ ...userDetails });
    try {
      if (validation.type) {
        loginHandler(userDetails.email, userDetails.password);
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
        <h3>Login</h3>
        <div className="login-wrapper-content">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails((prev) => ({ ...prev, email: event.target.value }))
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
          <button
            className="btn btn-primary auth-button "
            onClick={() => loginCLickHandler(userDetails)}
          >
            Login
          </button>
          <button
            className="btn btn-primary auth-button"
            onClick={() => loginHandler("test@gmail.com", "test12345")}
          >
            Guest Login
          </button>
          <h4>Not a member yet?</h4>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

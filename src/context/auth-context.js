import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = function ({ children }) {
  const [userState, setUserState] = useState({
    userDetails:
      JSON.parse(localStorage.getItem("ECOM_AUTH_USER"))?.userDetails || "",
    token: JSON.parse(localStorage.getItem("ECOM_AUTH_TOKEN"))?.token || "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status === 200) {
        const {
          data: { foundUser, encodedToken },
        } = response;
        setUserState({ userDetails: foundUser, token: encodedToken });
        localStorage.setItem(
          "ECOM_AUTH_USER",
          JSON.stringify({
            userDetails: foundUser,
          })
        );
        localStorage.setItem(
          "ECOM_AUTH_TOKEN",
          JSON.stringify({
            token: encodedToken,
          })
        );
        navigate(location?.state?.from?.pathname || "/", {
          replace: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOutHandler = () => {
    setUserState({
      userDetails: "",
      token: "",
    });
    localStorage.removeItem("ECOM_AUTH_USER");
    localStorage.removeItem("ECOM_AUTH_TOKEN");
    navigate("/");
  };

  const signUpHandler = async (email, password, name, confirmPass) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        name,
      });
      if (response.status === 201) {
        const {
          data: { createdUser, encodedToken },
        } = response;
        setUserState({ userDetails: createdUser, token: encodedToken });
        localStorage.setItem(
          "ECOM_AUTH_USER",
          JSON.stringify({
            userDetails: createdUser,
          })
        );
        localStorage.setItem(
          "ECOM_AUTH_TOKEN",
          JSON.stringify({
            token: encodedToken,
          })
        );
        navigate(location?.state?.from?.pathname || "/", {
          replace: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const token = userState.token;

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, logOutHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "contexts";

export const useLogin = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: _email,
        password: _password,
      });
      setToken(response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/product", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  const dummyHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/auth/login", {
      email: "arpitkumar@gmail.com",
      password: "arpit1234",
    });
    setToken(response.data.encodedToken);
    setIsLoggedIn(true);
    navigate(location.state?.from?.pathname || "/product", { replace: true });
  };

  return {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  };
};

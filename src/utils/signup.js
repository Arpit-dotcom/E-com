import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import { signUpReducer } from "reducer";
import { useAuth } from "contexts";

export const useSignup = () => {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [signUpState, signUpDispatch] = useReducer(signUpReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: signUpState.firstName,
        lastName: signUpState.lastName,
        email: signUpState.email,
        password: signUpState.password,
        confirmPassword: signUpState.confirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/product", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };
  return { signUpDispatch, submitHandler, signUpState };
};

import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/product");
  };

  const logOutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    navigate("/product");
  };

  return { logOutHandler, notLogOutHandler };
};

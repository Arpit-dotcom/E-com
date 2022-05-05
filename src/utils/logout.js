import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/product");
  };

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/product");
  };

  return { logOutHandler, notLogOutHandler };
};

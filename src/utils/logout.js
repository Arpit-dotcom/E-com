import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useProduct, useWishlist } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const { productDispatch } = useProduct();
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/product");
  };

  const logOutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    productDispatch({ type: "CLEAR" });
    cartDispatch({ type: "CLEAR_CART" });
    wishlistDispatch({ type: "CLEAR_WISHLIST" });
    navigate("/product");
  };

  return { logOutHandler, notLogOutHandler };
};

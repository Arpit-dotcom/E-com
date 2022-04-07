import { Main } from "./main/Main";
import "styles/Cart.css";
import { useCart } from "contexts/CartContext";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    document.title = "Cart | Shopzila";
  }, []);
  const { cartState } = useCart();
  return cartState.cart.length === 0 ? (
    <h1 className="cart-empty">Cart is empty!!!!</h1>
  ) : (
    <Main />
  );
};

export { Cart };

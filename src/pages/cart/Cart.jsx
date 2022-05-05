import { Main } from "./main/Main";
import "styles/Cart.css";
import { useCart } from "contexts/CartContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    document.title = "Cart | Shopzila";
  }, []);
  const { cartState } = useCart();
  return cartState.cart.length === 0 ? (
    <div className="cart-empty">
      <h2>Cart is empty!!!!</h2>
      <p>
        Explore more products, <Link to="/product"> Continue shopping </Link>
      </p>
    </div>
  ) : (
    <Main />
  );
};

export { Cart };

import {
  createContext,
  useReducer,
  useContext,
} from "react";
import { cartReducer } from "reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const totalItemsPrice = cartState.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.qty),
    0
  );
  const discount = totalItemsPrice * 0.4;
  const totalPrice = totalItemsPrice + 40 - totalItemsPrice * 0.4;

  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, discount, totalItemsPrice, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

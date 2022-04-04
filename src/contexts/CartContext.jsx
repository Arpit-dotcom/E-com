import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalPrice: 0
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

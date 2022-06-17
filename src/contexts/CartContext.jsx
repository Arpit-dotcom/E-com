import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

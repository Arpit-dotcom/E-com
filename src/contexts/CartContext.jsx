import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const addToCart = (cart, payload) => {
    return cart.find((product) => product._id === payload._id)
      ? cart
      : [...cart, { ...payload, quantity: 1 }];
  };

  const removeFromCart = (cart, payload) => {
    return cart.find((product) => product._id === payload._id)
      ? [...cart].filter((product) => product._id !== payload._id)
      : cart;
  };

  const increaseQuantity = (cart, payload) => {
    return [...cart].map((product) =>
      product._id === payload._id
        ? { ...payload, quantity: product.quantity + 1 }
        : product
    );
  };

  const decreaseQuantity = (cart, payload) => {
     return payload.quantity > 1 ? [...cart].map((product) =>
       product._id === payload._id
         ? { ...payload, quantity: product.quantity - 1 }
         : product
     ) : [...cart].filter(product => product._id !== payload._id)
  };

  const cartReducer = (cartState, cartAction) => {
    switch (cartAction.type) {
      case "ADD_TO_CART":
        return {
          ...cartState,
          cart: addToCart(cartState.cart, cartAction.payload),
          totalPrice: cartState.totalPrice +cartAction.payload.price
        };
      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cart: removeFromCart(cartState.cart, cartAction.payload),
          totalPrice:
            cartState.totalPrice -
            cartAction.payload.price * cartAction.payload.quantity,
        };
      case "INCREASE_QUANTITY":
        return {
          ...cartState,
          cart: increaseQuantity(cartState.cart, cartAction.payload),
          totalPrice: cartState.totalPrice + cartAction.payload.price,
        };
      case "DECREASE_QUANTITY":
        return {
          ...cartState,
          cart: decreaseQuantity(cartState.cart, cartAction.payload),
          totalPrice: cartState.totalPrice - cartAction.payload.price,
        };
      default:
        return cartState;
    }
  };
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

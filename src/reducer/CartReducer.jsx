import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "utils/cart";

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: addToCart(cartState.cart, cartAction.payload),
        totalPrice: cartState.totalPrice + cartAction.payload.price,
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
export { cartReducer };

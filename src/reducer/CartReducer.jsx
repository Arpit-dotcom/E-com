import { increaseQuantity, decreaseQuantity } from "utils";

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    case "UPDATE_QUANTITY":
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    case "CLEAR_CART":
      return { ...cartState, cart: [] };
    default:
      return cartState;
  }
};
export { cartReducer };

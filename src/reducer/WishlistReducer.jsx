import { addToWishlist, removeFromWishlist } from "utils/wishlist";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: addToWishlist(state.wishlist, action.payload),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: removeFromWishlist(state.wishlist, action.payload),
      };
    default:
      return state;
  }
};

export { reducer };

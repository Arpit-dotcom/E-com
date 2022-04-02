import {addToWishlist,removeFromWishlist} from "utils/wishlist";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_wishlist":
      return {
        ...state,
        wishlist: addToWishlist(state.wishlist, action.payload),
      };
    case "Remove_from_wishlist":
      return {
        ...state,
        wishlist: removeFromWishlist(state.wishlist, action.payload),
      };
    default:
      return state;
  }
};

export { reducer };

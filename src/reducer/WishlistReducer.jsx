import { addToWishlist, removeFromWishlist } from "utils";

const wishlistReducer = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload,
      };
    case "CLEAR_WISHLIST":
      return { ...wishlistState, wishlist: [] };
    default:
      return wishlistState;
  }
};

export { wishlistReducer };

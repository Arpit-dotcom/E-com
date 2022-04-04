const addToWishlist = (wishlist, payload) => {
  return wishlist.find((product) => product._id === payload._id)
    ? wishlist
    : [...wishlist, payload];
};

const removeFromWishlist = (wishlist, payload) => {
  return wishlist.find((product) => product._id === payload._id)
    ? [...wishlist].filter((product) => product._id !== payload._id)
    : wishlist;
};

export { addToWishlist, removeFromWishlist };

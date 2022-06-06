export const getWishlist = (wishlist, productId) => {
  return wishlist.some((product) => product._id === productId);
};

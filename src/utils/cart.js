export const getCart = (cart, productId) => {
  return cart.some((product) => product._id === productId);
};

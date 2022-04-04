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
  return payload.quantity > 1
    ? [...cart].map((product) =>
        product._id === payload._id
          ? { ...payload, quantity: product.quantity - 1 }
          : product
      )
    : [...cart].filter((product) => product._id !== payload._id);
};

export { addToCart, removeFromCart, increaseQuantity, decreaseQuantity };

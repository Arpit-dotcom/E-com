import { useCart, useWishlist } from "contexts";

export const Card = () => {
  const { wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  return (
    <main className="sub-container">
      {cartState.cart.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <img className="img" src={product.image} alt="cartItems" />

          <section className="header">
            <h1 className="text">
              <strong>{product.brand}</strong>
            </h1>
            <h2 className="brand">{product.title}</h2>
            <h3 className="price">{product.price}</h3>
          </section>

          <section className="card-footer">
            <button
              className="icon-button"
              onClick={() =>
                cartDispatch({ type: "DECREASE_QUANTITY", payload: product })
              }
            >
              -
            </button>
            <div className="icon-quantity">{product.quantity}</div>
            <button
              className="icon-button"
              onClick={() =>
                cartDispatch({ type: "INCREASE_QUANTITY", payload: product })
              }
            >
              +
            </button>
          </section>

          <section
            className="card-footer"
            onClick={() =>
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              })
            }
          >
            <div className="icon">
              <a className="favourite" href="#">
                <i className="fas fa-heart"></i> Add to wishlist
              </a>
            </div>
          </section>
        </section>
      ))}
    </main>
  );
};

import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";

export const Card = (cart) => {
  const { dispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  return (
    <main className="sub-container">
      {cartState.cart.map((cart) => (
        <section className="padding-0 card horizontal" key={cart._id}>
          <img className="img" src={cart.image} alt="cartItems" />

          <section className="header">
            <h1 className="text">
              <strong>{cart.brand}</strong>
            </h1>
            <h2 className="brand">{cart.title}</h2>
            <h3 className="price">{cart.price}</h3>
          </section>

          <section className="card-footer">
            <button
              className="icon-button"
              onClick={() =>
                cartDispatch({ type: "DECREASE_QUANTITY", payload: cart })
              }
            >
              -
            </button>
            <div className="icon-quantity">{cart.quantity}</div>
            <button
              className="icon-button"
              onClick={() =>
                cartDispatch({ type: "INCREASE_QUANTITY", payload: cart })
              }
            >
              +
            </button>
          </section>

          <section
            className="card-footer"
            onClick={() =>
              dispatch({
                type: "ADD_TO_WISHLIST",
                payload: cart,
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

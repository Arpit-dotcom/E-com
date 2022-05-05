import { useCart, useWishlist } from "contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Card = () => {
  const { wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const addToWishlist = (product) => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toast.success("Item add to wishlist!");
  };

  const increaseHandler = (product) => {
    cartDispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });
    toast.success("Item quantity increased!");
  };

  const decreaseHandler = (product) => {
    cartDispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
    toast.error("Item quantity decreased!");
  };

  return (
    <main className="sub-container">
      {cartState.cart.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <div className="container1">
            <section className="header">
              <h2 className="text">
                <strong>{product.brand}</strong>
              </h2>
              <h3 className="margin-bottom-1 brand">{product.title}</h3>
              <p className="margin-bottom-1 price">{product.price}</p>
              <section className="card-footer">
                <button
                  className="icon-button"
                  onClick={() => decreaseHandler(product)}
                >
                  -
                </button>
                <div className="icon-quantity">{product.quantity}</div>
                <button
                  className="icon-button"
                  onClick={() => increaseHandler(product)}
                >
                  +
                </button>
              </section>

              <section
                className="card-footer"
                onClick={() => addToWishlist(product)}
              >
                <div className="margin-top-0_5 icon">
                  <a className="favourite" href="#">
                    <i className="fas fa-heart"></i> Add to wishlist
                  </a>
                </div>
              </section>
            </section>
            <img className="img" src={product.image} alt="cartItems" />
          </div>
        </section>
      ))}
      <ToastContainer />
    </main>
  );
};

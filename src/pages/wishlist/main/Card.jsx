import { useCart, useWishlist } from "contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success("Item add to cart!");
  };

  const removeFromWishlist = (product) => {
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
    toast.error("Item removed from wishlist!");
  };

  return (
    <main className="sub-container">
      {wishlistState.wishlist.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <img className="img" src={product.image} alt="wishlist-products" />

          <section className="header">
            <h2 className="text">
              <strong>{product.brand}</strong>
            </h2>
            <h3 className="brand">{product.title}</h3>
            <p className="price">{product.price}</p>
          </section>

          <section className="card-footer" onClick={() => addToCart(product)}>
            <div className="icon">
              <a className="favourite" href="#">
                <i className="fas fa-shopping-cart"></i>Add to Cart
              </a>
            </div>
          </section>
          <section
            className="card-footer"
            onClick={() => removeFromWishlist(product)}
          >
            <div className="icon">
              <a className="favourite" href="#">
                <i className="fas fa-heart"></i> Remove from wishlist
              </a>
            </div>
          </section>
        </section>
      ))}
      <ToastContainer />
    </main>
  );
};

export { Card };

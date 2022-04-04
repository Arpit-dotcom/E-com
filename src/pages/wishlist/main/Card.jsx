import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";

const Card = () => {
  const { state, dispatch } = useWishlist();
  const { cartDispatch } = useCart();
  return (
    <main className="sub-container">
      {state.wishlist.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <img className="img" src={product.image} alt="wishlist-products" />

          <section className="header">
            <h1 className="text">
              <strong>{product.brand}</strong>
            </h1>
            <h2 className="brand">{product.title}</h2>
            <h3 className="price">{product.price}</h3>
          </section>

          <section
            className="card-footer"
            onClick={() =>
              cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            <div className="icon">
              <a className="favourite" href="#">
                <i className="fas fa-shopping-cart"></i>Add to Cart
              </a>
            </div>
          </section>
          <section
            className="card-footer"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              })
            }
          >
            <div className="icon">
              <a className="favourite" href="#">
                <i className="fas fa-heart"></i> Remove from wishlist
              </a>
            </div>
          </section>
        </section>
      ))}
    </main>
  );
};

export { Card };

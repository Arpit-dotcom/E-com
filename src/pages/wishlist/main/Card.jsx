import { useWishlist } from "contexts/WishlistContext";

const Card = () => {
  const { state, dispatch } = useWishlist();
  return (
    <main className="sub-container">
      {console.log({ state })}
      {state.wishlist.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <img className="img" src={product.image} alt="wishlist-products" />

          <section className="header">
            <h2 className="brand">Brand Name</h2>
            <h3 className="price">Brand Price</h3>
          </section>

          <p className="text">
            <strong>Product Name</strong>
            and product information
          </p>

          <section className="card-footer">
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

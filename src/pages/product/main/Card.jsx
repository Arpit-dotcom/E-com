const { useWishlist } = require("contexts/WishlistContext");

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const { state, dispatch } = useWishlist();
  const inWishlist = state.wishlist.find((item) => item._id === _id);
  const wishlistButton = !inWishlist ? "favorite_border" : "favorite";
  const wishlistButtonHandler = ({
    brand,
    image,
    price,
    title,
    rating,
    _id,
  }) => {
    if (!inWishlist) {
      dispatch({
        type: "Add_to_wishlist",
        payload: { brand, image, price, title, rating, _id },
      });
    } else {
      dispatch({
        type: "Remove_from_wishlist",
        payload: { brand, image, price, title, rating, _id },
      });
    }
  };
  return (
    <section className="card badge-card" key={_id}>
      <button
        className="wishlist-button"
        onClick={() =>
          wishlistButtonHandler({
            brand,
            image,
            price,
            title,
            rating,
            _id,
          })
        }
      >
        <span className="material-icons-outlined">{wishlistButton}</span>
      </button>
      <img className="img" src={image} alt="card-image" />
      <div className="rating">{rating}star</div>
      <div className="card-text">
        <h3>{brand}</h3>
        <p>{title}</p>
        <small>
          <strong>₹{price}</strong>
        </small>
      </div>
      <section className="card-footer">
        <div className="icon">
          <a className="favourite" href="#">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </a>
        </div>
      </section>
    </section>
  );
};

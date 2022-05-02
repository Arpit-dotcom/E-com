import { useCart, useWishlist } from "contexts";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  const inWishlist = wishlistState.wishlist.find((item) => item._id === _id);
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
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { brand, image, price, title, rating, _id },
      });
    } else {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: { brand, image, price, title, rating, _id },
      });
    }
  };
  const clickHandler = () => {
    if(toggleButton === true){
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { brand, image, price, title, rating, _id },
      })
    }
    setToggleButton(false);
  };
  return (
    <section className="card badge-card">
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
      <section className="card-footer" onClick={clickHandler}>
        <div className="icon">
          <a className="favourite" href="#">
            {toggleButton ? (
              <>
                <i className="fas fa-shopping-cart"></i> Add to cart
              </>
            ) : (
              <Link className="go-to-cart" to="/cart">Go to cart</Link>
            )}
          </a>
        </div>
      </section>
    </section>
  );
};

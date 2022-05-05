import { useAuth, useCart, useWishlist } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
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
    if (!isLoggedIn) {
      navigate("/login");
    }
    else{
      if (!inWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { brand, image, price, title, rating, _id },
        });
      } 
      else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { brand, image, price, title, rating, _id },
        });
      }
    }
  };
  const clickHandler = () => {
    if(!isLoggedIn){
      navigate("/login")
    }
    else{
      if (toggleButton === true) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { brand, image, price, title, rating, _id },
        });
      }
      setToggleButton(false);
    }
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
      <div className="rating">
        {rating}
        <i class="fas fa-star"></i>
      </div>
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
              <Link className="go-to-cart" to="/cart">
                Go to cart
              </Link>
            )}
          </a>
        </div>
      </section>
    </section>
  );
};

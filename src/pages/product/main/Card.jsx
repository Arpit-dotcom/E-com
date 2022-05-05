import { useAuth, useCart, useWishlist } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.success("Item add to wishlist!");
      } 
      else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { brand, image, price, title, rating, _id },
        });
        toast.error("Item removed from wishlist!");
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
      toast.success("Item add to cart!");
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
        <i className="fas fa-star"></i>
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
          <span className="favourite">
            {toggleButton ? (
              <div className="cursor-pointer">
                <i className="fas fa-shopping-cart"></i> Add to cart
              </div>
            ) : (
              <Link className="cursor-pointer go-to-cart" to="/cart">
                Go to cart
              </Link>
            )}
          </span>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

import { useAuth, useCart, useWishlist } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const [toggleButton, setToggleButton] = useState(true);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const product = { brand, image, price, title, rating, _id };

  const inWishlist = wishlistState.wishlist.find((item) => item._id === _id);
  const wishlistButton = !inWishlist ? "favorite_border" : "favorite";

  const wishlistButtonHandler = async (productId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
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
        try {
          const response = await axios.post(
            "/api/user/wishlist",
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );
          wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: response.data.wishlist,
          });
        } catch (error) {
          alert(error);
        }
      } else {
        try {
          const response = await axios.delete(
            `/api/user/wishlist/${productId}`,
            {
              headers: {
                authorization: token,
              },
            }
          );
          wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: response.data.wishlist,
          });
        } catch (error) {
          alert(error);
        }
      }
    }
  };

  const addCartHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (toggleButton === true) {
        try {
          const response = await axios.post(
            "/api/user/cart",
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );
          cartDispatch({
            type: "ADD_TO_CART",
            payload: response.data.cart,
          });
        } catch (error) {
          alert(error);
        }
      }
      toast.success("Item add to cart!");
      setToggleButton(false);
    }
  };

  return (
    <section className="card badge-card">
      <button
        className="wishlist-button"
        onClick={() => wishlistButtonHandler(_id)}
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
      <section className="card-footer" onClick={addCartHandler}>
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

import { useAuth, useCart, useWishlist } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCart } from "utils";

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const product = { brand, image, price, title, rating, _id };

  const inWishlist = wishlistState.wishlist.find((item) => item._id === _id);
  const wishlistButton = !inWishlist ? "favorite_border" : "favorite";

  const wishlistButtonHandler = async (productId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!inWishlist) {
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
          toast.success("Item add to wishlist!");
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
          toast.error("Item removed from wishlist!");
        } catch (error) {
          alert(error);
        }
      }
    }
  };

  const addCartHandler = async () => {
    const inCart = getCart(cartState.cart, product._id);
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!inCart) {
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
          toast.success("Item add to cart!");
        } catch (error) {
          alert(error);
        }
      }
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
          <div className="cursor-pointer"> Add to cart</div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

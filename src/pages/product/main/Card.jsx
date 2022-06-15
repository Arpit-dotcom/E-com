import { useAuth, useCart, useWishlist } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCart, getWishlist } from "utils";

export const Card = ({ brand, image, price, title, rating, _id }) => {
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const inWishlist = getWishlist(wishlistState.wishlist, _id);
  const inCart = getCart(cartState.cart, _id);
  const product = { brand, image, price, title, rating, _id };

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
          toast.success(`${title} added to wishlist!`);
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
          toast.error(`${title} removed from wishlist!`);
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
          toast.success(`${title} added to cart!`);
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
        <span className="material-icons-outlined">
          {!inWishlist ? "favorite_border" : "favorite"}
        </span>
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
        <div className={`icon ${inCart ? "active" : "inactive"}`}>
          {!inCart ? (
            <div className="cursor-pointer">Add to cart</div>
          ) : (
            <Link to="/cart" className="cursor-pointer go-to-cart">
              Go to cart
            </Link>
          )}
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

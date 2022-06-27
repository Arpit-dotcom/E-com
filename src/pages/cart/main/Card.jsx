import { useCart, useWishlist, useAuth } from "contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getWishlist } from "utils";

export const Card = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { token } = useAuth();

  const addWishlistHandler = async (product) => {
    const inWishlist = getWishlist(wishlistState.wishlist, product._id);
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
        toast.success(`${product.title} added to wishlist!`);
      } catch (error) {
        alert(error);
      }
    }
  };

  const removeCartHandler = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: {
          authorization: token,
        },
      });
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: response.data.cart,
      });
      toast.error(`${product.title} removed from cart!`);
    } catch (error) {
      alert(error);
    }
  };

  const updateCart = async (updateType, product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: response.data.cart,
      });
      updateType === "increment"
        ? toast.success(`${product.title} quantity increases!`)
        : toast.error(`${product.title} quantity decreases!`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="sub-container">
      {cartState.cart.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <div className="container1">
            <section className="header">
              <h2 className="text">
                <strong>{product.brand}</strong>
              </h2>
              <h3 className="brand">{product.title}</h3>
              <p className="price">₹ {product.price}</p>
              <section className="card-quantity">
                <span>Quantity : </span>
                <button
                  disabled={product.qty === 1}
                  className={`${
                    product.qty === 1 ? "disable" : ""
                  } icon-button`}
                  onClick={() => updateCart("decrement", product)}
                >
                  -
                </button>
                <span className="icon-quantity">{product.qty}</span>
                <button
                  className="icon-button"
                  onClick={() => updateCart("increment", product)}
                >
                  +
                </button>
              </section>

              <section className="card-btn">
                <button
                  className="wishlist-btn"
                  onClick={() => addWishlistHandler(product)}
                >
                  <div className="margin-top-0_5 icon">Add to wishlist</div>
                </button>
                <button
                  className="cart-btn"
                  onClick={() => removeCartHandler(product)}
                >
                  <div className="margin-top-0_5 icon"> Remove from cart</div>
                </button>
              </section>
            </section>
            <img className="img" src={product.image} alt="cartItems" />
          </div>
        </section>
      ))}
      <ToastContainer />
    </main>
  );
};

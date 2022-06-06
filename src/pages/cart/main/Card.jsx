import axios from "axios";
import { useAuth, useCart, useWishlist } from "contexts";
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
      } catch (error) {
        alert(error);
      }
    }
  };

  const removeCartHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: response.data.cart,
      });
    } catch (error) {
      alert(error);
    }
  };

  const updateCart = async (updateType, productId) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
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
              <p className="price">{product.price}</p>
              <section className="card-footer">
                <button
                  disabled={product.qty === 1}
                  className="icon-button"
                  onClick={() => updateCart("decrement", product._id)}
                >
                  -
                </button>
                <div className="icon-quantity">{product.qty}</div>
                <button
                  className="icon-button"
                  onClick={() => updateCart("increment", product._id)}
                >
                  +
                </button>
              </section>

              <section
                className="card-footer"
                onClick={() => addWishlistHandler(product)}
              >
                <div className="margin-top-0_5 icon">
                  <a className="favourite" href="#">
                    <i className="fas fa-heart"></i> Add to wishlist
                  </a>
                </div>
              </section>
              <section
                className="card-footer"
                onClick={() => removeCartHandler(product._id)}
              >
                <div className="margin-top-0_5 icon">
                  <a className="favourite" href="#">
                    <i className="fas fa-shopping-cart"></i> Remove from cart
                  </a>
                </div>
              </section>
            </section>
            <img className="img" src={product.image} alt="cartItems" />
          </div>
        </section>
      ))}
    </main>
  );
};

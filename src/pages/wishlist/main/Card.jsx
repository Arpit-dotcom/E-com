import axios from "axios";
import { useAuth, useCart, useWishlist } from "contexts";
import { useState } from "react";
import { getCart } from "utils";

const Card = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const [toggleButton, setToggleButton] = useState(true);
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();

  const deleteWishlistHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (error) {
      alert(error);
    }
  };

  const addCartHandler = async (product) => {
    const inCart = getCart(cartState.cart, product._id);
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
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <main className="sub-container">
      {wishlistState.wishlist.map((product) => (
        <section className="padding-0 card horizontal" key={product._id}>
          <img className="img" src={product.image} alt="wishlist-products" />

          <section className="header">
            <h2 className="text">
              <strong>{product.brand}</strong>
            </h2>
            <h3 className="brand">{product.title}</h3>
            <p className="price">{product.price}</p>
          </section>

          <section
            className="card-footer"
            onClick={() => addCartHandler(product)}
          >
            <div className="icon">
              <div className="favourite">
                <div className="cursor-pointer">
                  <i className="fas fa-shopping-cart"></i>Add to Cart
                </div>
              </div>
            </div>
          </section>
          <section
            className="card-footer"
            onClick={() => deleteWishlistHandler(product._id)}
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

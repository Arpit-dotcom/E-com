import { useCart, useWishlist, useAuth } from "contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getCart } from "utils";

const Card = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();

  const deleteWishlistHandler = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization: token,
        },
      });
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
      toast.error(`${product.title} removed from wishlist!`);
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
        toast.success(`${product.title} added to cart!`);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      {wishlistState.wishlist.length && (
        <h1 className="margin-top-1 margin-bottom-1 wishlist-header">
          Wishlist ({wishlistState.wishlist.length})
        </h1>
      )}
      <main className="sub-container">
        {wishlistState.wishlist.map((product) => (
          <section className="padding-0 card horizontal" key={product._id}>
            <img className="img" src={product.image} alt="wishlist-products" />

            <section className="header">
              <h2 className="text">
                <strong>{product.brand}</strong>
              </h2>
              <h3 className="brand">{product.title}</h3>
              <p className="price"> ₹ {product.price}</p>
            </section>

            <section
              className="card-footer"
              onClick={() => addCartHandler(product)}
            >
              <div className="icon">
                <div className="cursor-pointer">Add to Cart</div>
              </div>
            </section>
            <section
              className="card-footer"
              onClick={() => deleteWishlistHandler(product)}
            >
              <div className="cursor-pointer secondary-icon">
                Remove from wishlist
              </div>
            </section>
          </section>
        ))}
        <ToastContainer />
      </main>
    </>
  );
};

export { Card };

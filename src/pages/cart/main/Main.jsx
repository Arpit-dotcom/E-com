import { useCart } from "contexts/CartContext";
import { Card } from "./Card";

const Main = () => {
  const { cartState } = useCart();
  const { cart, totalItemsPrice } = cartState;
  const discount = totalItemsPrice * 0.4;
  const totalPrice = totalItemsPrice + 40 - totalItemsPrice * 0.4;

  return (
    <section className="margin-0 cartContainer">
      <Card />
      <main className="sidebar">
        <section className="card only-text">
          <section className="header">
            <h1 className="margin-bottom-0_5 brand">
              <u>Price Details</u>
            </h1>
            <div className="margin-bottom-0_5 cart-text">
              <h3>Quantity</h3>
              <h3>{cart.length}</h3>
            </div>
            <div className="cart-text">
              <h3>Price</h3>
              <h3>₹{totalItemsPrice}</h3>
            </div>
            <div
              className="cart-text"
              style={{ textDecoration: "line-through" }}
            >
              <h3>Discount(40% off)</h3>
              <h3>₹{discount}</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h3>Delivery Charges</h3>
              <h3>₹40</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h3>Total Price</h3>
              <h3>₹{totalPrice}</h3>
            </div>
            <h4>You will save ₹{discount} on the product</h4>
          </section>

          <section className="card-footer">
            <div className="margin-0 padding-0 btn">
              <button
                className="margin-0 padding-0 btn primary"
                style={{ cursor: "pointer" }}
              >
                Place Order
              </button>
            </div>
          </section>
        </section>
      </main>
    </section>
  );
};

export { Main };

import { useCart } from "contexts/CartContext";
import { Card } from "./Card";

const Main = () => {
  const { cartState } = useCart();

  return (
    <section className="margin-0 cartContainer">
      <main className="sidebar">
        <section className="card only-text">
          <section className="margin-bottom-0_5 header">
            <h1 className="margin-bottom-0_5 brand">
              <u>Price Details</u>
            </h1>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Quantity</h2>
              <h3>{cartState.cart.length}</h3>
            </div>
            <div className="cart-text">
              <h2>Price</h2>
              <h3>₹{cartState.totalPrice}</h3>
            </div>
            <div
              className="cart-text"
              style={{ textDecoration: "line-through" }}
            >
              <h2>Discount(40% off)</h2>
              <h3>₹{cartState.totalPrice * 0.4}</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Delivery Charges</h2>
              <h3>₹40</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Total Price</h2>
              <h3>₹{cartState.totalPrice + 40 - cartState.totalPrice * 0.4}</h3>
            </div>
            <p>You will save ₹{cartState.totalPrice * 0.4} on the product</p>
          </section>

          <section className="card-footer">
            <div className="margin-0 padding-0 btn">
              <button className="margin-0 padding-0 btn primary">
                Place Order
              </button>
            </div>
          </section>
        </section>
      </main>

      <Card />
    </section>
  );
};

export { Main };

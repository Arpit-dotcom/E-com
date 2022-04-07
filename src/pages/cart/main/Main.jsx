import { useCart } from "contexts/CartContext";
import { Card } from "./Card";

const Main = () => {
  const { cartState } = useCart();
  const { cart, totalItemsPrice } = cartState;
  const discount = totalItemsPrice * 0.4;
  const totalPrice = totalItemsPrice + 40 - totalItemsPrice * 0.4;

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
              <h3>{cart.length}</h3>
            </div>
            <div className="cart-text">
              <h2>Price</h2>
              <h3>₹{totalItemsPrice}</h3>
            </div>
            <div
              className="cart-text"
              style={{ textDecoration: "line-through" }}
            >
              <h2>Discount(40% off)</h2>
              <h3>₹{discount}</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Delivery Charges</h2>
              <h3>₹40</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Total Price</h2>
              <h3>₹{totalPrice}</h3>
            </div>
            <h3>You will save ₹{discount} on the product</h3>
          </section>

          <section className="card-footer">
            <div className="margin-0 padding-0 btn">
              <button className="margin-0 padding-0 btn primary" style={{cursor:"pointer"}}>
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

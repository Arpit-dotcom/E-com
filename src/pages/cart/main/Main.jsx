import { useCart } from "contexts/CartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const Main = () => {
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const { cartState } = useCart();
  const { cart } = cartState;

  useEffect(() => {
    const totalItemsPrice = cartState.cart.reduce(
      (acc, curr) => (acc += curr.price * curr.qty),
      0
    );
    setTotalItemsPrice(totalItemsPrice);
  }, [cartState]);

  const discount = totalItemsPrice * 0.4;
  const totalPrice = totalItemsPrice + 40 - totalItemsPrice * 0.4;

  return (
    <>
      <h1 className="margin-top-1 margin-bottom-1 cart-header">
        Shopping Cart ({cart.length})
      </h1>
      <section className="margin-0 cartContainer">
        <Card />
        <main className="sidebar">
          <section className="card only-text">
            <section className="header">
              <h2 className="margin-bottom-0_5 brand">
                <u>Price Details</u>
              </h2>

              <div className="margin-top-1 margin-bottom-1 divider"></div>

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

              <div className="margin-top-1 margin-bottom-1 divider"></div>

              <div className="margin-bottom-0_5 cart-text">
                <h3>Total Price</h3>
                <h3>₹{totalPrice}</h3>
              </div>

              <div className="margin-top-1 margin-bottom-1 divider"></div>

              <h4>You will save ₹{discount} on the product</h4>
            </section>

            <section className="card-footer">
              <Link to="/address" className="margin-0 padding-0 btn">
                <button className="margin-0 padding-0 btn primary">
                  Place Order
                </button>
              </Link>
            </section>
          </section>
        </main>
      </section>
    </>
  );
};

export { Main };

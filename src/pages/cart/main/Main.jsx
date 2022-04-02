import { carts } from "staticData/data";

const Main = () => (
  <>
    <section className="margin-0 cartContainer">
      <main className="sidebar">
        <section className="card only-text">
          <section className="margin-bottom-0_5 header">
            <h1 className="margin-bottom-0_5 brand">
              <u>Price Details</u>
            </h1>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Quantity</h2>
              <h3>n</h3>
            </div>
            <div className="cart-text">
              <h2>Price</h2>
              <h3>₹</h3>
            </div>
            <div className="cart-text">
              <h2>Discount</h2>
              <h3>₹</h3>
            </div>
            <div className="margin-bottom-0_5 cart-text">
              <h2>Delivery Charges</h2>
              <h3>₹</h3>
            </div>
            <div className="cart-text">
              <h2>Total Price</h2>
              <h3>₹</h3>
            </div>
            <p>You will save ₹ on the product</p>
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

      <main className="sub-container">
        {carts.map((cart) => (
          <>
            <section className="padding-0 card horizontal">
              <img className="img" src={cart} alt="cartItems" />

              <section className="header">
                <h2 className="brand">Brand Name</h2>
                <h3 className="price">Brand Price</h3>
              </section>

              <p className="text">
                <strong>Product Name</strong>
                and product information
              </p>

              <section className="card-footer">
                <div className="icon">
                  <a className="favourite" href="#">
                    <i className="fas fa-heart"></i> Add to wishlist
                  </a>
                </div>
              </section>
              <section className="card-footer">
                <div className="icon">
                  <a className="favourite" href="#">
                    <i className="fas fa-shopping-cart"></i> Remove from cart
                  </a>
                </div>
              </section>
            </section>
          </>
        ))}
      </main>
    </section>
  </>
);

export { Main };

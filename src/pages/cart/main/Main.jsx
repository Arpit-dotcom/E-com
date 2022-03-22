import { carts } from "staticData/data";

const Main = () => (
  <>
    <section class="margin-0 cartContainer">
      <main class="sidebar">
        <section class="card only-text">
          <section class="margin-bottom-0_5 header">
            <h1 class="margin-bottom-0_5 brand">
              <u>Price Details</u>
            </h1>
            <div class="margin-bottom-0_5 cart-text">
              <h2>Quantity</h2>
              <h3>n</h3>
            </div>
            <div class="cart-text">
              <h2>Price</h2>
              <h3>₹</h3>
            </div>
            <div class="cart-text">
              <h2>Discount</h2>
              <h3>₹</h3>
            </div>
            <div class="margin-bottom-0_5 cart-text">
              <h2>Delivery Charges</h2>
              <h3>₹</h3>
            </div>
            <div class="cart-text">
              <h2>Total Price</h2>
              <h3>₹</h3>
            </div>
            <p>You will save ₹ on the product</p>
          </section>

          <section class="card-footer">
            <div class="margin-0 padding-0 btn">
              <button class="margin-0 padding-0 btn primary">
                Place Order
              </button>
            </div>
          </section>
        </section>
      </main>

      <main class="sub-container">
        {carts.map((cart) => (
          <>
            <section class="padding-0 card horizontal">
              <img class="img" src={cart} alt="cartItems" />

              <section class="header">
                <h2 class="brand">Brand Name</h2>
                <h3 class="price">Brand Price</h3>
              </section>

              <p class="text">
                <strong>Product Name</strong>
                and product information
              </p>

              <section class="card-footer">
                <div class="margin-0 padding-0 btn">
                  <button class="margin-0 padding-0 btn primary">
                    Buy Now
                  </button>
                </div>

                <div class="icon">
                  <a class="favourite" href="#">
                    <i class="fas fa-heart"></i>Add to wishlist
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

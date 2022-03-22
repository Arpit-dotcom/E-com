import {wishlists} from "./dump"

const Card = () => (
  <>
    <main class="sub-container">
      {wishlists.map((wishlist) => (
        <>
          <section class="padding-0 card horizontal">
            <img class="img" src={wishlist} alt="wishlist-products" />

            <section class="header">
              <h2 class="brand">Brand Name</h2>
              <h3 class="price">Brand Price</h3>
            </section>

            <p class="text">
              <strong>Product Name</strong>
              and product information
            </p>

            <section class="card-footer">
              <div class="icon">
                <a class="favourite" href="#">
                  <i class="fas fa-shopping-cart"></i>Add to Cart
                </a>
              </div>
            </section>
          </section>
        </>
      ))}
    </main>
  </>
);

export {Card}

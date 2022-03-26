import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useProduct } from "contexts/ProductContext";

const Main = () => {
  const { filteredProducts } = useProduct();

  return (
    <>
      <Header />

      <section className="productContainer">
        <Sidebar />

        <main className="main-content">
          {filteredProducts &&
            filteredProducts.map(
              ({ brand, image, price, title, rating, _id }) => (
                <section className="card badge-card" key={_id}>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <img className="img" src={image} alt="card-image" />
                  <div className="rating">{rating}star</div>
                  <div className="card-text">
                    <h3>{brand}</h3>
                    <p>{title}</p>
                    <small>
                      <strong>₹{price}</strong>
                    </small>
                  </div>
                </section>
              )
            )}
          {!filteredProducts.length && <h2>Loading...</h2>}
        </main>
      </section>
    </>
  );
};

export { Main };

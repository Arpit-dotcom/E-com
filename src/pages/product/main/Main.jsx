import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [productData, setProductData] = useState([]);

  useEffect(async () => {
    try {
      const result = await axios.get("/api/products");
      setProductData(result.data.products);
    } catch (error) {
      alert(error);
    }
  }, [productData]);

  return (
    <>
      <Header />

      <section className="productContainer">
        <Sidebar />

        <main className="main-content">
          {productData.map(
            ({ brand, id, image, price, title, rating, _id }) => (
              <>
                <section className="card badge-card" key={id}>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <img className="img" src={image} alt="card-image" />
                  <div className="rating">
                    {rating}star
                  </div>
                  <div className="card-text">
                    <h3>{brand}</h3>
                    <p>{title}</p>
                    <small>
                      <strong>₹{price}</strong>
                    </small>
                  </div>
                </section>
              </>
            )
          )}
        </main>
      </section>
    </>
  );
};

export { Main };

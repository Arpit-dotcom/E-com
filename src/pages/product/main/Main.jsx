import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "contexts/ProductReducer";

const getCategorisedProduct = (products, state) => {
  const array = [...products];
  const categories = state.categories;
  if (categories.length === 0) {
    return products;
  }
  return categories.reduce(
    (acc, category) => [
      ...acc,
      ...array.filter((product) => product.title === category),
    ],
    []
  );
};

const getRatingProducts = (products, state) => {
  if (state.rating === " " || state.rating === "") {
    return products;
  }
  const rating = parseInt(state.rating, 10);
  const array = [...products];
  return array.filter((product) => product.rating >= rating);
};

const getSortingProduts = (products, state) => {
  if (state.sortBy === " " || state.sortBy === "") {
    return products;
  }
  const sortBy = state.sortBy;
  const array = [...products];

  if (sortBy === "Low to High") {
    return array.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "High to Low") {
    return array.sort((a, b) => b.price - a.price);
  }
};

const Main = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { state } = useProduct();

  useEffect(async () => {
    try {
      const result = await axios.get("/api/products");
      const products = result.data.products;
      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    const categoryProducts = getCategorisedProduct(products, state);
    const ratingProducts = getRatingProducts(categoryProducts, state);
    const sortedProducts = getSortingProduts(ratingProducts, state);
    setFilteredProducts(sortedProducts);
  }, [state]);

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
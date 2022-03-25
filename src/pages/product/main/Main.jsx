import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "contexts/ProductReducer";

const getCategorisedProduct = (products, state) =>{
  const array = [...products];
  const categories = state.categories;
  if(categories.length === 0){
    return products;
  }
  return(
    categories.reduce(
      (acc, category) => [
        ...acc,
        ...array.filter((product) => product.title === category),
      ],
      []
    )
  );
}
const getRatingProducts = (products, state) =>
{
  if(state.rating === " "||state.rating===""){
    return products;
  }
  const rating = parseInt(state.rating,10);
  const array = [...products];
  return array.filter(product => product.rating >= rating);
}
const Main = () => {
  const [productData, setProductData] = useState([]);
  const { state, products } = useProduct();

  // useEffect(async () => {
  //   try {
  //     const result = await axios.get("/api/products");
  //     setProductData(result.data.products);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(state);
  //   const categoryProducts = getCategorisedProduct(productData, state);
  //   const ratingProducts = getRatingProducts(categoryProducts, state);
  //   setProductData([...ratingProducts]);
  // },[state]);

  console.log(products);
  return (
    <>
      <Header />

      <section className="productContainer">
        <Sidebar />

        <main className="main-content">
          {products.map(
            ({ brand, image, price, title, rating, _id }) => (
                <section className="card badge-card" key={_id}>
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
            )
          )}
        </main>
      </section>
    </>
  );
};

export { Main };

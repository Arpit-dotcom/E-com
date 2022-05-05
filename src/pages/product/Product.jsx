import { Main } from "./main/Main";
import "styles/Product.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "contexts";


const Product = () => {

  const getQueriedCategoryProducts= async(category, dispatch) => {
  if (category) {
    if (category === "Shoes") {
      dispatch({ type: "categories", payload: "Shoes" });
    }

    if (category === "Headphones") {
      dispatch({ type: "categories", payload: "Headphones" });
    }

    if (category === "Bag") {
      dispatch({ type: "categories", payload: "Bag" });
    }
    if (category === "Lipstick") {
      dispatch({ type: "categories", payload: "Lipstick" });
    }

    if (category === "Watch") {
      dispatch({ type: "categories", payload: "Watch" });
    }

    if (category === "Sunglasses") {
      dispatch({ type: "categories", payload: "Sunglasses" });
    }
  }
}
  const { dispatch } = useProduct();
  const { category } = useParams();
  useEffect(() => {
    document.title = "Product | Shopzila";
    getQueriedCategoryProducts(category, dispatch);
  }, []);

  return(
    <Main />
)}

export {Product}
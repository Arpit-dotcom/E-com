import { Main } from "./main/Main";
import "styles/Product.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "contexts";

const Product = () => {
  const getQueriedCategoryProducts = async (category, dispatch) => {
    if (category) {
      if (category === "Shoes") {
        dispatch({ type: "CATEGORIES", payload: "Shoes" });
      }

      if (category === "Headphones") {
        dispatch({ type: "CATEGORIES", payload: "Headphones" });
      }

      if (category === "Bag") {
        dispatch({ type: "CATEGORIES", payload: "Bag" });
      }
      if (category === "Lipstick") {
        dispatch({ type: "CATEGORIES", payload: "Lipstick" });
      }

      if (category === "Watch") {
        dispatch({ type: "CATEGORIES", payload: "Watch" });
      }

      if (category === "Sunglasses") {
        dispatch({ type: "CATEGORIES", payload: "Sunglasses" });
      }
    }
  };
  const { dispatch } = useProduct();
  const { category } = useParams();
  useEffect(() => {
    document.title = "Product | Shopzila";
    getQueriedCategoryProducts(category, dispatch);
  }, []);

  return <Main />;
};

export { Product };

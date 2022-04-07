import { Main } from "./main/Main";
import "styles/Product.css";
import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    document.title = "Product | Shopzila";
  }, []);
  return(
    <Main />
)}

export {Product}
import {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { productReducer } from "reducer";
import {
  getCategorisedProduct,
  getRatingProducts,
  getSortingProduts,
} from "utils";

const defaultState = {
  rating: "",
  sortBy: "",
  categories: [],
};

const ProductContext = createContext(defaultState);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    defaultState
  );
  const [products, setProducts] = useState([]);

  const filteredProducts = ((productState, [...products]) => {
    const categoryProducts = getCategorisedProduct(products, productState);
    const ratingProducts = getRatingProducts(categoryProducts, productState);
    const sortedProducts = getSortingProduts(ratingProducts, productState);
    return sortedProducts;
  })(productState, products);

  useEffect(async () => {
    try {
      const response = await axios.get("/api/products");
      const products = response.data.products;
      setProducts(products);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, filteredProducts, products }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

import {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "reducer";
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
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [products, setProducts] = useState([]);

  const filteredProducts = ((state, [...products]) => {
    const categoryProducts = getCategorisedProduct(products, state);
    const ratingProducts = getRatingProducts(categoryProducts, state);
    const sortedProducts = getSortingProduts(ratingProducts, state);
    return sortedProducts;
  })(state, products);

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
      value={{ state, dispatch, filteredProducts, products }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

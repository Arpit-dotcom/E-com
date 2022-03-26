import { useContext, useReducer, createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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

const checkCategories = (categories, category) => {
  if (categories.includes(category)) {
    return categories.filter((cat) => cat !== category);
  } else {
    return [...categories, category];
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "categories":
      return {
        ...state,
        categories: checkCategories(state.categories, action.payload),
      };
    case "Rating":
      return {
        ...state,
        rating: action.payload,
      };
    case "Sort":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CLEAR":
      return {
        rating: "",
        sortBy: "",
        categories: [],
      };
    default:
      return state;
  }
};

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
    <ProductContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

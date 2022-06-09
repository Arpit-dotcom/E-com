import { useProduct } from "contexts";
import { useState } from "react";

const useSearchBar = () => {
  const { products } = useProduct();
  const [searchInput, setSearchInput] = useState("");

  const searchBarHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(
      products.filter((item) => {
        if (searchInput === "") {
          return item;
        } else {
          if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return item;
          }
        }
      })
    );
  };
  return { searchBarHandler, searchInput };
};

const getCategorisedProduct = (searchInput, state) => {
  const array = [...searchInput];
  const categories = state.categories;
  if (categories.length === 0) {
    return searchInput;
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

export {
  getCategorisedProduct,
  getRatingProducts,
  getSortingProduts,
  useSearchBar,
};

const checkCategories = (categories, category) => {
  if (categories.includes(category)) {
    return categories.filter((cat) => cat !== category);
  } else {
    return [...categories, category];
  }
};

const productReducer = (productState, productAction) => {
  switch (productAction.type) {
    case "CATEGORIES":
      return {
        ...productState,
        categories: checkCategories(
          productState.categories,
          productAction.payload
        ),
      };
    case "RATING":
      return {
        ...productState,
        rating: productAction.payload,
      };
    case "SORT":
      return {
        ...productState,
        sortBy: productAction.payload,
      };
    case "CLEAR":
      return {
        rating: "",
        sortBy: "",
        categories: [],
        search: "",
      };
    case "SET_SEARCH":
      return { ...productState, search: productAction.payload };
    default:
      return productState;
  }
};

export { productReducer };

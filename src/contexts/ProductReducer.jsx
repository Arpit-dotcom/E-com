import { useContext, useReducer, createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

const ProductContext = createContext();

const checkCategories = (categories, category) =>{
    if(categories.includes(category)){
        return categories.filter(cat => cat !== category);
    }else{
        return [...categories, category];
    }
}

const ProductProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "categories":
          return {
              ...state,
              categories: checkCategories(state.categories, action.payload)
          }
      case "Headphones":
        return {
          ...state,
          headphones: !action.headphones,
        };
      case "Shoes":
        return {
          ...state,
          shoes: !action.shoes,
        };
      case "Lipstick":
        return {
          ...state,
          lipstick: !action.lipstick,
        };
      case "Earphone":
        return {
          ...state,
          earphone: !action.earphone,
        };
      case "Watch":
        return {
          ...state,
          watch: !action.watch,
        };
      case "Face_Wash":
        return {
          ...state,
          facewash: !action.facewash,
        };
      case "Sunglasses":
        return {
          ...state,
          sunglasses: !action.sunglasses,
        };
      case "Bag":
        return {
          ...state,
          bag: !action.bag,
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
      default:
        return state;
    }
  };

  const defaultState = {
    headphones: false,
    shoes: false,
    lipstick: false,
    earphone: false,
    watch: false,
    facewash: false,
    sunglasses: false,
    bag: false,
    rating: "",
    sortBy: "",
    categories: []
  };

  const getProducts = async() =>{
      try {
        const result = await axios.get("/api/products");
        return (result.data.products);
      } catch (error) {
        alert(error);
      }
  }
  const products = getProducts();

  const [state, dispatch] = useReducer(reducer, {...defaultState,products});

  useEffect(async()=>{
      const products = await getProducts();
      console.log(products);
  }
  ,[])

  return (
    <ProductContext.Provider value={{ dispatch, state }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

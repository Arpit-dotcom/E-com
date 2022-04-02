import { createContext } from "react";
import { useContext, useReducer } from "react";
import { reducer } from "reducer/WishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { wishlist: [] });

  return (
    <WishlistContext.Provider value={{ dispatch, state }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };

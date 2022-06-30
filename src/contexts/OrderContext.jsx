import { createContext, useContext, useReducer } from "react";
import { OrderReducer } from "reducer";

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(OrderReducer, {
    addresses: [],
    editAddress: null,
    selected: null,
  });

  return (
    <OrderContext.Provider value={{ orderDispatch, orderState }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder };

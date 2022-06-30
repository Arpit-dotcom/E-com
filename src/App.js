import "./App.css";
import {
  Cart,
  Home,
  Login,
  Logout,
  Product,
  Signup,
  Wishlist,
  Address,
  Order,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "components";
import { PageNotFound } from "pages/404page";
import { RequiredAuth } from "RequiredAuth";
import Mockman from "mockman-js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/wishlist"
          element={
            <RequiredAuth>
              <Wishlist />
            </RequiredAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/address" element={<Address />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;

import "./App.css";
import { Cart, Home, Login, Logout, Product, Signup, Wishlist } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "components";
import Mockman from "mockman-js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mock" element={<Mockman />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

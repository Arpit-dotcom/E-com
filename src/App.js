import "./App.css";
import { Cart, Home, Login, Logout, Product, Signup, Wishlist } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "components";
import { PageNotFound } from "pages/404page";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":category" element={<Product />} />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

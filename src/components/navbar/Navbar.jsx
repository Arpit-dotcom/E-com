import React from "react";
import "styles/Navbar.css";
import logoImage from "assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth, useWishlist, useCart } from "contexts";

const Navbar = () => {
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { isLoggedIn } = useAuth();
  return (
    <>
      <nav className="simple-navigation">
        <Link className="nav-list" to="/">
          <img className="logo" src={logoImage} alt="logo" />
          <h1 className="text">Shopzila</h1>
        </Link>

        <input
          className="nav-search"
          id="items-disabled"
          type="text"
          placeholder="Search for product, brands and more"
        />

        <div className="nav-list">
          <div className="list-item icons">
            <Link className="profile" to={!isLoggedIn ? "/login" : "/logout"}>
              <span className="material-icons"> account_circle </span>
              <span className="header-text">
                {!isLoggedIn ? "Login" : "Logout"}
              </span>
            </Link>

            <Link className="wishlist " to="/wishlist">
              <span className="material-icons"> favorite </span>
              <span className="header-text">Wishlist</span>
              <span className="material-icons badge"> circle </span>
              <span className="num-items">{wishlistState.wishlist.length}</span>
            </Link>

            <Link className="cart" to="/cart">
              <span className="material-icons"> shopping_cart </span>
              <span className="header-text">Cart</span>
              <span className="material-icons badge"> circle </span>
              <span className="num-items">{cartState.cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };

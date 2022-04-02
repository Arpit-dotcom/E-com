import React from "react";
import "styles/Navbar.css";
import logoImage from "assets/logo.png";
import { Link } from "react-router-dom";
import { useWishlist } from "contexts/WishlistContext";

const Navbar = () => {
  const {state} = useWishlist();
  return(
  <>
    <nav className="simple-navigation">
      <div className="nav-list">
        <img className="logo" src={logoImage} alt="logo" />
        <h1 className="text">Shopzilla</h1>
      </div>

      <input
        className="nav-search"
        id="items-disabled"
        type="text"
        placeholder="Search for product, brands and more"
      />

      <div className="nav-list">
        <div className="list-item icons">
          <Link className="profile" to="/login">
            <span className="material-icons"> account_circle </span>
            <span className="header-text">Profile</span>
          </Link>

          <Link className="wishlist " to="/wishlist">
            <span className="material-icons"> favorite </span>
            <span className="header-text">Wishlist</span>
            <span className="material-icons badge"> circle </span>
            <span className="num-items">{state.wishlist.length}</span>
          </Link>

          <Link className="cart" to="/cart">
            <span className="material-icons"> shopping_cart </span>
            <span className="header-text">Cart</span>
            <span className="material-icons badge"> circle </span>
            <span className="num-items">0</span>
          </Link>
        </div>
      </div>
    </nav>
  </>
)}

export { Navbar };

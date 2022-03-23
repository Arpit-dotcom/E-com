import React from "react";
import "styles/Navbar.css";
import logoImage from "assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <nav class="simple-navigation">
      <div class="nav-list">
        <img class="logo" src={logoImage} alt="logo" />
        <h1 class="text">Shopzilla</h1>
      </div>

      <input
        class="nav-search"
        id="items-disabled"
        type="text"
        placeholder="Search for product, brands and more"
      />

      <div class="nav-list">
        <div class="list-item icons">
          <Link class="profile" to="/login">
            <span class="material-icons"> account_circle </span>
            <span class="header-text">Profile</span>
          </Link>

          <Link class="wishlist " to="/wishlist">
            <span class="material-icons"> favorite </span>
            <span class="header-text">Wishlist</span>
            {/* <span class="material-icons badge"> circle </span>
            <span class="num-items">6</span> */}
          </Link>

          <Link class="cart" to="/cart">
              <span class="material-icons"> shopping_cart </span>
              <span class="header-text">Cart</span>
              {/* <span class="material-icons badge"> circle </span>
            <span class="num-items">6</span> */}
          </Link>
        </div>
      </div>
    </nav>
  </>
);

export { Navbar };

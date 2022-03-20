import React from "react";
import "./Navbar.css";
import logoImage  from "../../assets/e-commerce-logo.png";

const Navbar = () => (
  <>
    <nav class="simple-navigation">
      <img class="logo" src={logoImage} alt="logo" />
      <div class="nav-list">
        <a class="list-item" id="items-disabled" href="#">
          Men
        </a>
        <a class="list-item" id="items-disabled" href="#">
          Women
        </a>
        <a class="list-item" id="items-disabled" href="#">
          Kids
        </a>
        <a class="list-item" id="items-disabled" href="#">
          Home & Living
        </a>
        <a class="list-item" id="items-disabled" href="#">
          Beauty
        </a>
        <input
          class="nav-search"
          id="items-disabled"
          type="text"
          placeholder="Search for product, brands and more"
        />

        <div class="list-item icons">
          <a class="profile " href="/pages/login.html">
            <span class="material-icons"> account_circle </span>
            <span class="header-text">Profile</span>
          </a>

          <a class="wishlist " href="/pages/wishlist.html">
            <span class="material-icons"> favorite </span>
            <span class="header-text">Wishlist</span>
            <span class="material-icons badge"> circle </span>
            <span class="num-items">6</span>
          </a>

          <a class="cart" href="/pages/cart.html">
            <span class="material-icons"> shopping_cart </span>
            <span class="header-text">Cart</span>
            <span class="material-icons badge"> circle </span>
            <span class="num-items">6</span>
          </a>
        </div>
      </div>
    </nav>
  </>
);

export {Navbar};

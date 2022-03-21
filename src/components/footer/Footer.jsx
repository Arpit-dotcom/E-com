import React from "react";
import "./Footer.css";

const items = ["Men", "Women", "Kids", "Home & Living", "Beauty"];
const Footer = () => (
  <>
    <footer class="main-footer">
      <div class="footer-link" id="items-disabled">
        <h2 class="header">
          <u>Online Shopping</u>
        </h2>
        <ul class="stacked-list">
          {items.map((item) => (
            <>
              <li class="list-item">
                <a class="link" href="" target="_blank">
                  <small>{item}</small>
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div class="footer-link" id="mob-disabled">
        <h3 class="header">
          <u>Contacts</u>
        </h3>
        <ul class="stacked-list">
          <li class="list-item">
            <a class="link" href="" target="_blank">
              <small>7988909084</small>
            </a>
          </li>
          <li class="list-item">
            <a class="link" href="" target="_blank">
              <small>arpitkumar01923@gmail.com</small>
            </a>
          </li>
        </ul>
      </div>

      <div class="retina">
        <img
          class="img-size"
          src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
          alt=""
        />
        <p class="text">
          <strong>100% ORIGINAL </strong>guarantee for all products at
          shopzilla.com
        </p>
      </div>
    </footer>
  </>
);

export {Footer};
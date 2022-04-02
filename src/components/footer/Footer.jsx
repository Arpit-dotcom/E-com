import React from "react";
import "styles/Footer.css";

const items = ["Men", "Women", "Kids", "Home & Living", "Beauty"];
const Footer = () => (
  <>
    <footer className="main-footer">
      <div className="footer-link" id="items-disabled">
        <h2 className="header">
          <u>Online Shopping</u>
        </h2>
        <ul className="stacked-list">
          {items.map((item, index) => (
            <li className="list-item" key={index}>
              <a className="link" href="" target="_blank">
                <small>{item}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-link" id="mob-disabled">
        <h3 className="header">
          <u>Contacts</u>
        </h3>
        <ul className="stacked-list">
          <li className="list-item">
            <a className="link" href="" target="_blank">
              <small>7988909084</small>
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="" target="_blank">
              <small>arpitkumar01923@gmail.com</small>
            </a>
          </li>
        </ul>
      </div>

      <div className="retina">
        <img
          className="img-size"
          src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
          alt=""
        />
        <p className="text">
          <strong>100% ORIGINAL </strong>guarantee for all products at
          shopzilla.com
        </p>
      </div>
    </footer>
  </>
);

export { Footer };

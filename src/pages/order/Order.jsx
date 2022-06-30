import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "styles/Order.css";

export const Order = () => {
  return (
    <section className="order-container">
      <BsCheckCircle className="success-icon" />
      <h1>Order Placed Successfully</h1>
      <Link to="/product" className="shop-btn">
        Continue shopping
      </Link>
    </section>
  );
};

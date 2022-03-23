import { Link } from "react-router-dom";

const Header = () => (
  <>
    <header class="head">
      <p>
        <Link class="home" to="/">
          Home
        </Link>
        /
        <a class="product" href="#">
          <strong>Product</strong>
        </a>
      </p>
    </header>
  </>
);

export { Header };

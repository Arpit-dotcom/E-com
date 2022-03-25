import { Link } from "react-router-dom";

const Header = () => (
  <>
    <header className="head">
      <p>
        <Link className="home" to="/">
          Home
        </Link>
        /
        <a className="product" href="#">
          <strong>Product</strong>
        </a>
      </p>
    </header>
  </>
);

export { Header };

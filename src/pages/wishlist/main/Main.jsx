import { useWishlist } from "contexts";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const Main = () => {
  const { wishlistState } = useWishlist();
  return (
    <section className="margin-0 wishlistContainer">
      <Card />
      {!wishlistState.wishlist.length && (
        <div className="wishlist-empty">
          <h2>Wishlist is empty!!!!</h2>
          <p>
            Explore more products, <Link to="/product"> Continue shopping </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export { Main };

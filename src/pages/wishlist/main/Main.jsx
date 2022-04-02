import { useWishlist } from "contexts/WishlistContext";
import { Card } from "./Card";

const Main = () => {
  const {state} = useWishlist();
  return(
    <section className="margin-0 wishlistContainer">
      <Card />
      {!state.wishlist.length && <h1 className="wishlist-empty">Wishlist is empty!!!!</h1>}
    </section>
)}

export { Main };

import { useWishlist } from "contexts";
import { Card } from "./Card";

const Main = () => {
  const {wishlistState} = useWishlist();
  return(
    <section className="margin-0 wishlistContainer">
      <Card />
      {!wishlistState.wishlist.length && <h1 className="wishlist-empty">Wishlist is empty!!!!</h1>}
    </section>
)}

export { Main };

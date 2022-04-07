import { Main } from "./main/Main";
import "styles/Wishlist.css";
import { useEffect } from "react";

const Wishlist = () =>{ 
  useEffect(() => {
    document.title = "Wishlist | Shopzila";
  }, []);
  return(
    <Main />
)}

export {Wishlist}

import { Main } from "./main/Main";
import "styles/Home.css";
import { useEffect, useState } from "react";
import { Footer } from "components";
import axios from "axios";
import { useProduct } from "contexts";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const { productDispatch } = useProduct();

  useEffect(() => {
    document.title = "Home | Shopzila";
    (async () => {
      const response = await axios("/api/categories");
      const categories = response.data.categories;
      setCategories(categories);
    })();
    productDispatch({ type: "CLEAR" });
  }, []);

  return (
    <>
      <Main categories={categories} />
      <Footer />
    </>
  );
};

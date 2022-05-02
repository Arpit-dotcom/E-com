import { Main } from "./main/Main";
import "styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    document.title = "Home | Shopzila";
    (async () => {
      const response = await axios("/api/categories");
      const categories = response.data.categories;
      setCategories(categories);
    })();
  }, []);
  return <Main categories={categories} />;
};

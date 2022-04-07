import {Main} from "./main/Main";
import "styles/Home.css";
import { useEffect } from "react";

export const Home = () =>{ 
  useEffect(() => {
    document.title = "Home | Shopzila";
  }, []);
  return (
      <Main />
  )}
  
import React from "react";
import "./Home.css";
import { Navbar, Footer } from "../../components/componentIndex";
import {Main} from "./main/Main"

export const Home = () =>{ 
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )}
  
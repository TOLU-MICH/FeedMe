import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import SearchResultContainer from "./component/SearchResultContainer";
import Hero from "./component/Hero";
import Recipes from "./component/Recipes";
import axios from "axios";
import Explore from "./component/Explore";

function App() {
  return (
    <>
      <Hero />
      <Explore />
    </>
  );
}

export default App;

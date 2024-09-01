import React, { useEffect, useState } from "react";
import { data } from "../data/recipeData";
import IngredientsCard from "./IngredientsCard";
import axios from "axios";
import { DotLoader } from "react-spinners";

let dish = data[0];
let desert = data[1];

function getMealTime() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours <= 12) {
    return "breakfast";
  } else if (hours >= 12 && hours <= 18) {
    return "lunch";
  } else if (hours >= 18 && hours <= 21) {
    return "dinner";
  }
}

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ meal: undefined, desert: undefined });

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get(
        `https://feed-me-api-main.vercel.app/meals/random/${getMealTime()}`
      );
      const desertResponse = await axios.get(
        `https://feed-me-api-main.vercel.app/meals/random/Dessert`
      );
      setTimeout(() => {
        setLoading(false);
        setData({ meal: response.data, desert: desertResponse.data });
      }, 2000);
    };
    fetchMeals();
  }, []);
  return (
    <section className="relative max-w-screen-xl mx-auto py-14">
      <h3 className="text-3xl text-center font-[montserrat] mb-10">
        <span className="text-primary">Featured </span>
        <span className="text-secondary">Dish </span>
        <span className="hidden text-white lg:inline">Of the</span>
        <span className="hidden text-primary lg:inline"> Day</span>
      </h3>
      {/* <IngredientsCard
          list={dish.ingredients}
          title={dish.name}
          tag={dish.type}
          key={dish.name}
          // containerStyles="lg:!w-fit"
        /> */}
      <div className="relative lg:w-[760px] mx-auto space-y-4 lg:space-y-0 flex justify-center min-h-96">
        {loading ? (
          <div className="mx-auto animate-fadeIn">
            <DotLoader color="#F65F5F" />
            <p>getting featured dish</p>
          </div>
        ) : (
          <div className="flex ">
            <Card data={data.meal} />
            <div className="hidden md:block">
              <Card data={data.desert} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function Card({ data }) {
  return (
    <div className="py-4 overflow-hidden text-white lg:w-[480px] rounded-xl bg-[#181010] space-y-2 border border-black w-full animate-fadeIn">
      <div className="border-b-[2px] border-black relative ">
        <div className="px-6 pb-4 ">
          <h3 className="font-extrabold font-[Montserrat,sans-serif]">
            {data.name}
          </h3>
          <div className=" font-[Roboto,sans-serif]  flex items-center gap-x-2 text-sm font-medium  mt-2">
            <span className="px-3 py-1 text-xs font-bold rounded-full w-fit bg-primary bg-opacity-90 font-[Montserrat,sans-serif]">
              {data.type}
            </span>
          </div>
        </div>
      </div>

      <ul className="px-6 pb-4 overflow-hidden ">
        {data.ingredients.map((itm, idx) => (
          <li key={itm}>
            <span className=" font-[Montserrat,sans-serif] text-xs text-secondary pr-2">
              Step {idx + 1} :
            </span>
            {""}
            {itm}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;

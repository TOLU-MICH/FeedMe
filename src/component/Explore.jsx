import React, { useEffect, useRef, useState } from "react";
import SearchResultContainer from "./SearchResultContainer";
import axios from "axios";
import { BarLoader, DotLoader, SyncLoader } from "react-spinners";

const categories = ["All", "Dessert", "Breakfast", "Lunch", "Dinner"];

// https://feedme-api.onrender.com/

const Explore = () => {
  let [loading, setLoading] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [data, setData] = useState();

  const inputValue = useRef(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://feedme-api.onrender.com/meals/`
      );
      setTimeout(() => {
        setLoading(false);
        setData(response.data);
      }, 2000);
    };
    fetchMeals();
  }, []);

  const fetchMeal = async (idx, e) => {
    e && e.preventDefault();
    if (inputValue.current?.value !== "") {
      setLoading(true);
      const response = await axios.get(
        `https://feed-me-api-main.vercel.app/meals/search/${inputValue.current.value}`
      );
      showLoader(response, idx);
    } else {
      setLoading(true);
      const response = await axios.get(
        `https://feed-me-api-main.vercel.app/meals/`
      );
      showLoader(response, idx);
    }
  };

  function showLoader(response, idx) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const data =
      idx !== 0
        ? response.data.filter((itm) => itm.type === categories[idx])
        : response.data;
    console.log(categories[idx]);
    setData(data);
  }

  return (
    <div className="flex flex-wrap items-center justify-center px-8 pt-16 bg-gray-[#f9fafa] w-full">
      <div className="flex flex-col items-center w-full space-y-4">
        <h4 className="text-3xl text-center font-[montserrat] mb-10">
          <span className="text-primary">Explore </span>
          <span className="text-secondary">Other </span>
          <span className="text-black ">Dish</span>
        </h4>
        <form
          noValidate
          onSubmit={(e) => fetchMeal(selectedCategory, e)}
          className="flex items-center w-full md:max-w-[70%] p-2 mx-auto overflow-hidden border-2 rounded-full border-secondary"
        >
          <input
            type="search"
            className="w-full px-5 text-sm font-medium text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
            placeholder="Enter the food name "
            ref={inputValue}
          />
          <button
            className="px-5 py-2 text-sm font-black rounded-full bg-primary text-[#f9fafa]"
            type="submit"
          >
            Search
          </button>
        </form>
        <div>
          <ul className="flex flex-wrap gap-3 font-[Roboto,sans-serif]">
            <span className="font-bold font-[montserrat]">Categories: </span>
            {categories.map((itm, idx) => (
              <li
                className={
                  "px-4 py-1 text-sm font-semibold rounded-lg transition-colors hover:cursor-pointer duration-300 hover:scale-110 ease-in-out  " +
                  (selectedCategory == idx
                    ? "bg-secondary text-black"
                    : "bg-primary")
                }
                onClick={() => {
                  setSelectedCategory(() => {
                    return idx;
                  });
                  fetchMeal(idx);
                }}
                key={itm}
              >
                {itm}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <span className="font-bold font-[montserrat]">Total Meals: </span>
            <span className="text-primary">
              {!loading && data ? (
                data.length
              ) : (
                <SyncLoader size={3} speedMultiplier={0.5} color="#F65F5F" />
              )}
            </span>
          </div>
        </div>
        <SearchResultContainer
          data={data}
          loading={loading}
          searchedValue={inputValue.current?.value}
          type={categories[selectedCategory]}
        />
      </div>
    </div>
  );
};

export default Explore;

import { Fragment, useEffect, useRef, useState } from "react";
import { CloseIcon } from "../assets/svg";
import IngredientsCard from "./IngredientsCard";
import FadeIn from "react-fade-in";
import { Dialog, Transition } from "@headlessui/react";
import { ClipLoader, DotLoader } from "react-spinners";

const SearchResultContainer = ({ data, searchedValue, type, loading }) => {
  const [selectedData, setSelectedData] = useState(null);
  return (
    <>
      <div className="flex flex-col lg:flex-wrap lg:justify-center items-center lg:items-start w-full gap-4 py-4 overflow-hidden lg:flex-row min-h-[50vh] ">
        {loading !== undefined &&
          (!loading ? (
            <>
              {data &&
                (data.length == 0
                  ? searchedValue && (
                      <p>
                        No Recipe was found for{" "}
                        <strong>"{searchedValue}"</strong> under the
                        <strong>"{type}"</strong> category.
                      </p>
                    )
                  : data.map((item) => (
                      <IngredientsCard
                        list={item.ingredients}
                        title={item.name}
                        tag={item.type}
                        key={item.name}
                      />
                    )))}
            </>
          ) : (
            <FadeIn className="flex flex-col items-center justify-center">
              <DotLoader color="#F65F5F" />
              <p className="text-primary">loading</p>
            </FadeIn>
          ))}
      </div>
    </>
  );
};

export default SearchResultContainer;

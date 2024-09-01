import { Fragment, useEffect, useRef, useState } from "react";
import { CloseIcon } from "../assets/svg";
import IngredientsCard from "./IngredientsCard";
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
                      <p className="animate-fadeIn">
                        No Recipe was found for{" "}
                        <strong className="text-primary">
                          "{searchedValue}"
                        </strong>{" "}
                        {type !== "All" && (
                          <>
                            under the{" "}
                            <strong className="text-primary">"{type}"</strong>{" "}
                            category.
                          </>
                        )}
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
            <div className="flex flex-col items-center justify-center animate-fadeIn">
              <DotLoader color="#F65F5F" />
              <p className="text-primary">loading</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchResultContainer;

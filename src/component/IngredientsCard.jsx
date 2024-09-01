import React, { Fragment, useState } from "react";
import { ChevronRight, CloseIcon } from "../assets/svg";
import { Dialog, Transition } from "@headlessui/react";
import FadeIn from "react-fade-in";

const IngredientsCard = ({
  title,
  tag,
  list,
  trim = false,
  containerStyles = "",
}) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        className={
          "py-5 px-6  w-full lg:w-[380px] rounded-xl bg-white  space-y-2 border border-gray-200 relative  h-fit" +
          containerStyles
        }
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FadeIn className="w-full">
          <h5 className="font-extrabold font-[Montserrat,sans-serif] text-gray-800 mb-1">
            {title}
          </h5>
          <div className="=  flex justify-between items-center w-full">
            <span className="px-3 py-1 text-xs font-bold rounded-full w-fit bg-primary bg-opacity-90 font-[Montserrat,sans-serif] text-gray-100">
              {tag}
            </span>
            <div className="flex gap-x-3">
              <p className="text-sm text-gray-600">View ingredients</p>
              <div className=" font-[Roboto,sans-serif]  flex items-center gap-x-2 text-sm font-medium ">
                <ChevronRight />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="py-4 overflow-hidden text-white lg:w-[480px] rounded-xl bg-[#181010] space-y-2 border border-black ">
                  <div className="border-b-[2px] border-black relative ">
                    <div className="px-6 pb-4 ">
                      <Dialog.Title
                        as="h3"
                        className="font-extrabold font-[Montserrat,sans-serif]"
                      >
                        {title}
                      </Dialog.Title>
                      <div className=" font-[Roboto,sans-serif]  flex items-center gap-x-2 text-sm font-medium  mt-2">
                        <span className="px-3 py-1 text-xs font-bold rounded-full w-fit bg-primary bg-opacity-90 font-[Montserrat,sans-serif]">
                          {tag}
                        </span>
                      </div>
                    </div>
                    <button
                      className="font-bold bg-[#795151] bg-opacity-35  p-2 flex justify-center items-center rounded-full  absolute top-3 right-3"
                      onClick={closeModal}
                    >
                      <span className="">
                        <CloseIcon />
                      </span>
                    </button>
                  </div>

                  <ul className="px-6 pb-4 overflow-hidden ">
                    {list.map((itm, idx) => (
                      <li key={itm}>
                        <span className=" font-[Montserrat,sans-serif] text-xs text-secondary pr-2">
                          Step {idx + 1} :
                        </span>
                        {""}
                        {itm}
                      </li>
                    ))}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default IngredientsCard;

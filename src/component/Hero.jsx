import { useRef, useState } from "react";
import burger from "../assets/burger.webp";
import SearchResultContainer from "./SearchResultContainer";
import axios from "axios";
import Recipes from "./Recipes";
import FadeIn from "react-fade-in";
import logo from "../assets/logo.webp";

const Hero = () => {
  return (
    <>
      <section className="bg-[#0D0D0D] w-full overflow-hidden font-[Roboto,sans-serif] min-h-screen z-40">
        <FadeIn className="w-full min-h-screen bg-gradient-to-b via-[#0D0D0D] from-[#f547481c] from-5%  max-w-screen-xl px-8 mx-auto">
          <div className="flex flex-col items-center justify-center w-fit ">
            <div className="flex items-center w-full p-8 px-0 gap-x-2">
              <img src={logo} alt="logo" className="w-12" />
              <p className="text-primary font-bold font-[Montserrat,sans-serif] text-xl">
                Feed<span className="text-secondary">ME</span>
              </p>
            </div>
            <div className="flex flex-col pt-12 lg:flex-row lg:justify-center gap-x-4">
              <div className="lg:max-w-[39%] text-white  flex justify-center  flex-col gap-y-3">
                <span className="text-3xl xl:text-4xl font-extrabold  font-[Montserrat,sans-serif]">
                  <span className="text-primary">Cooking</span>{" "}
                  <span>Made</span> <span className="text-secondary">Easy</span>
                  <span className="text-white"> : </span>
                  <span className="text-secondary">Explore</span>
                  <span className="text-primary"> Random Recipes</span>{" "}
                  <span>Daily</span>
                  <span className="text-secondary">.</span>
                </span>
                <p className="font-medium max-w-[80%] ">
                  Discover easy cooking and fun surprises! Explore different
                  recipes every day, making your kitchen a place of endless
                  flavors.
                </p>
              </div>

              <div className="lg:w-[40%] flex justify-center items-center w-full">
                <div>
                  <div className="">
                    <img src={burger} alt="" className="w-full h-full " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Recipes />
        </FadeIn>
      </section>
    </>
  );
};

export default Hero;

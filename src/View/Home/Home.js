import React from "react";
import Box from "@mui/joy/Box";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Home/Navbar/Navbar";
import Cat from "../../Component/Home/Category/Cat";
import HeroSection from "../../Component/Home/Hero/HeroSection";
import "./Home.css";
import Explore from "../../Component/Home/Explore_Cat/Explore";
import Promo from "../../Component/Home/Promo/Promo";
import Cards from "../../Component/cards/Card";
import Looks from "../../Component/Home/Looks/Looks";
import Footer from "../../Component/Home/Footer/Footer";
import Service from "../../Component/Home/Service/Service";
import data from "./../../Data/Product.json";


function Home() {
  return (
    <>
      <Navbar />

      <Cat />
      <HeroSection />
      <h1 className="head">Explore offers by categories</h1>
      <Explore />

      {/* Banner */}
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff4500] to-[#fe5a1d ] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff4500] to-[#fe5a1d ] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Jack's Furniture</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <Link
            to={`/signUp`}
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div>

      <h1 className="head ">Top Products</h1>

      <Box
        sx={{
          marginTop: "50px",
          // position: 'relative',
          display: "flex",
          margin: "auto",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: 1300,

          borderColor: "error.main",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item) => (
          <Cards
            id={item.id}
            src1={item.src1}
            src2={item.src2}
            title={item.title}
            info={item.info}
            price={item.price}
            review={item.review}
            review2={item.review2}
          />
        ))}
      </Box>

      <Promo />
      <h1 className="head">Looks By you</h1>
      <Looks />
      <h1 className="head">Discover our services</h1>
      <Service />
      <Footer />
    </>
  );
}

export default Home;

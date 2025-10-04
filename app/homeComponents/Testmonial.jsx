/** @format */
"use client";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { RxBorderDashed } from "react-icons/rx";
import data from "../TestmonialData/TestmonialData.Js";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PrevArrow = ({ onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="absolute z-50 -left-13 md:-left-20 cursor-pointer  rounded-full text-white bg-[#f87171] top-1/2 -translate-y-1/2 p-[10px]"
    >
      <MdOutlineArrowBackIosNew className="text-2xl" />
    </button>
  </div>
);
const NextArrow = ({ onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="absolute z-50 -right-13 md:-right-20 cursor-pointer top-1/2 -translate-y-1/2 p-[10px] rounded-full text-white bg-[#f87171]"
    >
      <MdOutlineArrowForwardIos className="text-2xl" />
    </button>
  </div>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="bg-[#ddd] rounded-xl flex justify-center items-center  ">
        <ul className="text-green-500  flex justify-center gap-4 items-center">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" mt-10 -ml-[6px] w-8 h-[6px] flex justify-center items-center active:text-green-500 bg-gray-400 rounded-full hover:bg-green-600 transition-all duration-300"></div>
    ),
  };

  return (
    <>
      <div
        className="w-full flex justify-center relative rounded-xl 
       mt-10 items-start min-h-[50vh] max-h-[70vh] p-5 bg-[#F6F6F6]"
      >
        <div className=" w-full max-w-[80%]  mt-5 md:mt-10">
          <div className=" flex justify-center items-center">
            <span className="text-red-400 text-4xl">
              <RxBorderDashed />
            </span>
            <h3 className="text-lg xl:text-xl mx-1">Testimonial</h3>
            <span>
              <RxBorderDashed className="text-red-400 text-4xl" />
            </span>
          </div>
          <div className="w-full flex justify-center items-center py-8">
            {" "}
            <div className=" text-3xl md:text-4xl font-bold ">
              What <span className=" text-[#204A25]">Our Clients Say</span>
            </div>
          </div>
          <div className=" md:hidden relative ">
            <Slider {...settings}>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl !w-[300px] overflow-hidden bg-white flex flex-col"
                >
                  <div className="flex flex-col relative py-2 rounded-b-full justify-center items-center bg-green-500 h-1/2">
                    <div className="w-[100px] relative  h-[100px] rounded-full overflow-hidden bg-gray-100 border-2 border-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="text-center p-2">
                      <h2 className="font-bold text-xl">{item.name}</h2>
                      <p className=" text-black">{item.designation}</p>
                      <div className="py-2 flex justify-center items-center text-xl gap-2  text-[#f87171] ">
                        <IoStar className="" />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </div>
                    </div>
                    <div className="text-xl left-2 bottom-3 p-4 shadow-md rounded-full bg-white absolute">
                      <FaQuoteLeft />
                    </div>
                  </div>

                  <div className=" text-md bg-gray-200 h-1/2 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, veniam! Quisquam sit, labore sed, praesentium
                    sequi dicta deleniti cupiditate
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" md:block  hidden relative  w-full ">
            <Slider {...settings}>
              {data.map((item) => (
                <div className=" min-w-[260px]  overflow-hidden max-w-[500px] min-h-[150px] max-h-[300px] shadow-md rounded-xl bg-gray-50 ">
                  <div className="w-full   ">
                    <div className="w-full max-h-1/2 bg-white flex justify-start">
                      <div className=" p-2 flex justify-end items-center rounded-r-full  bg-green-600 min-w-[35%] w-[20px]">
                        <div className="min-h-16 max-h-32  min-w-16 max-w-32  bg-gray-200  rounded-full border-2 border-white overflow-hidden ">
                          <Image
                            src={item.image}
                            style={{ objectFit: "cover" }}
                            alt={item.name}
                          />
                        </div>
                      </div>
                      <div className=" w-[40%] flex items-center justify-start p-1">
                        <div>
                          <h1 className="text-[12px] lg:text-[18px] xl:text-[24px] font-bold">
                            {item.name}
                          </h1>
                          <p className="text-[10px] lg:text-[14px] xl:text-[18px]">
                            {item.designation}
                          </p>
                          <div className=" flex gap-1 text-[10px] lg:text-[14px] xl:text-[18px] p-1">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                          </div>
                        </div>
                      </div>
                      <div className=" flex justify-center items-center min-w-[25%]">
                        <div className="p-4  rounded-full text-xl bg-white shadow-md ">
                          <FaQuoteLeft />
                        </div>
                      </div>
                    </div>
                    <div className="p-2 lg:p-4 text-[10px] lg:text-md xl:text-lg xl:p-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut, labore! Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Fuga, nesciunt. Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

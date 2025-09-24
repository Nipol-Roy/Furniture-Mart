/** @format */
"use client";

import Image from "next/image";
import Slider from "react-slick";
import imgOne from "../../public/homePageImages/imageOne.jpg";
import imgThree from "../../public/homePageImages/imageThree.jpg";
import imgTwo from "../../public/homePageImages/imageTwo.jpg";

const CardPage = () => {
  const slide = [imgOne, imgTwo, imgThree];

  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute hidden sm:block right-4 h-10 w-10 hover:scale-110 duration-300 cursor-pointer border top-1/2 -translate-y-1/2 z-10 text-white rounded-full   "
      >
        <i className="ri-arrow-right-wide-line text-3xl"></i>
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute hidden sm:block left-4 h-10 w-10 hover:scale-110 duration-300 cursor-pointer border top-1/2 -translate-y-1/2 z-10 text-white rounded-full   "
      >
        <i className="ri-arrow-left-wide-line text-3xl "></i>
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    essEase: "linear",
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-40px",
        }}
      >
        <ul className="flex justify-center transition-all   duration-500 items-center">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-400 duration-500 rounded-full hover:bg-blue-500 transition"></div>
    ),
  };
  return (
    <div className=" py-10 relative ">
      <Slider {...settings}>
        {slide.map((slid, index) => {
          return (
            <div className="relative w-full rounded-2xl h-[300px] md:h-[450px] lg:h-[500px]">
              {index === 0 && (
                <div>
                  <Image
                    src={slid}
                    alt={`slide-${index}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className=" absolute w-full h-full bg-black opacity-50 rounded-2xl"></div>
                  <div className="text-white absolute w-full h-full sm:px-[15%]  md:px-[20%]  flex justify-center sm:justify-start items-center">
                    <h2 className="text-3xl flex flex-col justify-center items-center">
                      <div className=" text-[30px] sm:text-[40px] md:[text-50px] lg:text-[60px] xl:text-[70px] uppercase font-extrabold ">
                        Hot Offers
                      </div>
                      <div className="text-[70px] sm:text-[80px] md:text-[90px]  lg:text-[100px] font-extrabold text-red-500">
                        50%
                      </div>
                    </h2>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div>
                  <Image
                    src={slid}
                    alt={`slide-${index}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className=" absolute w-full h-full bg-black opacity-50 rounded-2xl"></div>
                  <div className="text-white absolute w-full h-full px-[5%] sm:px-[15%]  flex justify-center sm:justify-start items-center">
                    <h2 className="text-3xl flex flex-col w-full items-center ">
                      <div className=" text-[25px] sm:text-[35px] md:[text-45px] lg:text-[55px] xl:text-[65px] uppercase font-extrabold w-full text-start ">
                        new
                      </div>
                      <div className="text-[50px] sm:text-[60px] md:text-[70px]  lg:text-[100px] font-extrabold text-red-500 text-center w-full">
                        collection...
                      </div>
                      <div className="text-end w-full text-[30px] md:text-[40px] lg:text-[50px] font-extrabold ">
                        2025
                      </div>
                    </h2>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div>
                  <Image
                    src={slid}
                    alt={`slide-${index}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className=" absolute w-full h-full bg-black opacity-50 rounded-2xl"></div>
                  <div className="text-white absolute w-full h-full sm:px-[15%]  md:px-[20%]  flex justify-center sm:justify-end items-center">
                    <h2 className="text-3xl flex flex-col justify-center items-center">
                      <div className=" text-[70px] sm:text-[80px]  md:text-[105px] lg:text-[130px]  uppercase font-extrabold text-red-500 ">
                        Deal
                      </div>
                      <div className="text-[25px] sm:text-[30px] md:text-[40px]   lg:text-[50px] font-extrabold text-gray-900 bg-white capitalize px-2">
                        Of the week
                      </div>
                      <div className="text-[12px] md:text-[16px] lg:text-xl">
                        Limited Time Only-Grab It Now
                      </div>
                    </h2>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardPage;

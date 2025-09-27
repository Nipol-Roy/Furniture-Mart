/** @format */
"use client";
import Link from "next/link";
import Slider from "react-slick";
import Cards from "./cards";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute hidden sm:flex items-center justify-center
     right-4 md:right-6 h-10 w-10 hover:scale-110 duration-300 cursor-pointer 
     top-1/2 -translate-y-1/2 z-40 text-gray-900 bg-white shadow-md rounded-full"
  >
    <i className="ri-arrow-right-wide-line text-2xl"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute hidden sm:flex items-center justify-center left-4 md:left-6 h-10 w-10 
    hover:scale-110 duration-300 cursor-pointer top-1/2 -translate-y-1/2 z-40
     text-gray-900 bg-white shadow-md rounded-full"
  >
    <i className="ri-arrow-left-wide-line text-2xl"></i>
  </button>
);

const CardCrasoule = ({ title, cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center px-5 py-4 w-full">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <Link href="/Products">
          <span className="hover:text-red-500 text-base sm:text-lg font-medium cursor-pointer">
            View more →
          </span>
        </Link>
      </div>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Cards
              image={card.image}
              text={card.text}
              category={card.category}
              price={card.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCrasoule;

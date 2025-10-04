/** @format */
import { MdMail } from "react-icons/md";
import { RxBorderDashed } from "react-icons/rx";

const OurNewsLetter = () => {
  return (
    <>
      <div className="w-full bg-gray-100 my-5 rounded-xl h-[50vh] flex justify-center items-center">
        <div className="">
          <div className="flex justify-center items-center my-8 ">
            <span className="text-red-400 text-2xl md:text-4xl ">
              <RxBorderDashed />
            </span>
            <h3 className="text-lg xl:text-xl mx-1">Subscrib</h3>
            <span>
              <RxBorderDashed className="text-red-400 text-2xl md:text-4xl" />
            </span>
          </div>
          <div className="text-2xl md:text-4xl  gap-2 font-bold flex flex-col justify-center items-center w-full">
            <span>Subscrib to Our Newsletter to Get</span>
            <span className=" text-green-700">
              Updates to Our Latest Collection
            </span>
          </div>
          <div className="flex justify-center items-center my-3">
            <p className="text-sm">
              Get 20% on your first order just by subscribing to our newsletter
            </p>
          </div>
          <div className="flex justify-center relative items-center gap-3 md:gap-5  m-5">
            <MdMail className="text-4xl absolute left-1 bg-green-600 rounded-full text-white p-2" />

            <input
              type="text"
              className=" outline-none ring ring-green-500 focus:ring-3 focus:shadow-xl focus:shadow-green-200 shadow-lg py-2 w-full px-12 md:px-14 text-md md:text-lg  rounded-full"
              placeholder="Enter Email Address"
            />
            <button className="px-3 md:px-6 py-2 cursor-pointer hover:scale-110 duration-300 md:py-2.5 shadow-lg text-black bg-amber-500 rounded-full text-md md:text-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurNewsLetter;

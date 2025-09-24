/** @format */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";

const navbar = () => {
  const [menu, setMenu] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className=" sticky z-99 top-0 bg-white rounded-lg ">
      <div className="flex justify-between items-center px-2 py-4 ">
        <div className="text-2xl capitalize font-bold text-red-400">
          Furniture Mart
        </div>

        <div className="md:flex hidden  justify-center items-center gap-5 lg:gap-8 text-xl font-semibold">
          <Link href="/ " className="text-[18px] lg:text-xl text-gray-900">
            Home
          </Link>
          <li className=" list-none text-[18px] lg:text-xl text-gray-900 ">
            New Arrivals
          </li>
          <li className="list-none text-[18px] lg:text-xl text-gray-900">
            Top Sellers
          </li>
          <Link
            href="/Products"
            className="text-[18px] lg:text-xl text-gray-900"
          >
            {" "}
            Products
          </Link>
        </div>

        <div className="flex justify-center items-center md:gap-4 gap-2 lg:gap-5 ">
          <i className="ri-truck-fill text-2xl lg:text-3xl hover:text-red-500 cursor-pointer text-gray-900 "></i>
          <Link href="/wishlist">
            <i className="ri-heart-fill text-2xl lg:text-3xl hover:text-red-500 cursor-pointer text-gray-900 "></i>
          </Link>
          <Link href="/cart" className="relative">
            <i className="ri-shopping-cart-2-fill text-2xl lg:text-3xl hover:text-red-500 cursor-pointer text-gray-900 "></i>
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
                {cartItemCount}
              </span>
            )}
          </Link>
          <div>
            <div className="md:hidden ">
              <i
                onClick={() => setMenu(!menu)}
                className="ri-menu-line text-2xl cursor-pointer hover:text-red-500"
              ></i>
            </div>
            {menu && (
              <div className="flex overflow-hidden absolute top-0 left-0 w-full h-screen">
                <div
                  onClick={() => setMenu(false)}
                  className=" w-[30%] sm:w-[50%]  h-full opacity-5  bg-gray-200"
                ></div>
                <div className="w-[70%] sm:w-[50%] h-full bg-gray-300">
                  <div className="relative">
                    <i
                      onClick={() => setMenu(!menu)}
                      className="ri-close-large-fill text-2xl absolute top-2 right-2 cursor-pointer hover:text-red-500"
                    ></i>
                    <div className="flex md:hidden  py-10 flex-col justify-center items-center gap-5 text-xl font-semibold">
                      <Link
                        onClick={() => setMenu(!menu)}
                        href="/ "
                        className=" px-10 sm:px-20 py-3 hover:bg-red-300 hover:text-white text-xl hover:rounded-2xl transition-all duration-500"
                      >
                        Home
                      </Link>
                      <li className=" list-none px-10 sm:px-20 py-3 hover:bg-red-300 hover:text-white text-xl hover:rounded-2xl transition-all duration-500">
                        New Arrivals
                      </li>
                      <li className=" list-none  px-10 sm:px-20 py-3 hover:bg-red-300 hover:text-white text-xl hover:rounded-2xl transition-all duration-500">
                        Top Sellers
                      </li>
                      <Link
                        onClick={() => setMenu(!menu)}
                        href="/Products"
                        className="  px-20 py-3 hover:bg-red-300 hover:text-white text-xl hover:rounded-2xl transition-all duration-500"
                      >
                        Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;

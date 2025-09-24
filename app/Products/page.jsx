/** @format */

"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ProductCard from "../../app/components/cards";
import data from "../../public/data/data";

const page = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const [filters, setFilters] = useState({
    category: [],
    priceRange: [],
    availability: [],
    material: [],
    roomType: [],
    style: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };
  const priceRanges = {
    "$0 - $100": (price) => price >= 0 && price <= 100,
    "$100 - $300": (price) => price >= 100 && price <= 300,
    "$300+": (price) => price > 300,
  };

  const filteredProducts = data.Products.filter((product) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(product.category)) &&
      (filters.priceRange.length === 0 ||
        (filters.priceRange.some((range) =>
          priceRanges[range](product.price)
        ) &&
          filters.availability.length === 0) ||
        filters.availability.includes(
          product.inStock ? "In Stock" : "Out Of Stock"
        )) &&
      (filters.material.length === 0 ||
        filters.material.includes(product.material)) &&
      (filters.roomType.length === 0 ||
        filters.roomType.includes(product.roomType)) &&
      (filters.style.length === 0 || filters.style.includes(product.style))
    );
  });

  const handleOrder = (order) => {
    setSortOrder(order);
  };

  let sortedProduct = [...filteredProducts];

  if (sortOrder === "price-low") {
    sortedProduct = [...sortedProduct].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-high") {
    sortedProduct = [...sortedProduct].sort((a, b) => b.price - a.price);
  } else if (sortOrder === "name") {
    sortedProduct = [...sortedProduct].sort((a, b) =>
      a.text.localeCompare(b.text)
    );
  }

  return (
    <div className="w-full  ">
      <div className="my-5">
        <h2 className="text-3xl py-4 font-bold">Prodcts</h2>
      </div>
      <div className=" flex justify-between w-full gap-1">
        <div className="w-full md:w-1/4  hidden min-[768px]:block  bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold ">Filter Options</h2>

          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Category</h2>
            {["Furniture", "Lighting", "Decor"].map((cate) => (
              <label
                key={cate}
                checked={filters.category.includes(cate)}
                onChange={() => handleFilterChange("category", cate)}
                className="block mt-2"
              >
                <input type="checkbox" className="mr-2" />
                {cate}
              </label>
            ))}
          </div>

          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Price Range</h2>
            {["$0 - $100", "$100 - $300", "$300+"].map((price) => (
              <label key={price} className="block mt-2">
                <input
                  type="checkbox"
                  checked={filters.priceRange.includes(price)}
                  onChange={() => handleFilterChange("priceRange", price)}
                  className="mr-2"
                />
                {price}
              </label>
            ))}
          </div>

          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Availability</h2>
            {["In Stock", "Out of Stock"].map((avail) => (
              <label key={avail} className="block mt-2">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(avail)}
                  onChange={() => handleFilterChange("availability", avail)}
                  className="mr-2"
                />
                {avail}
              </label>
            ))}
          </div>

          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Material</h2>
            {["Wood", "Metal", "Fabric", "Leather", "Glass", "Rattan"].map(
              (mate) => (
                <label key={mate} className="block mt-2">
                  <input
                    type="checkbox"
                    checked={filters.material.includes(mate)}
                    onChange={() => handleFilterChange("material", mate)}
                    className="mr-2"
                  />
                  {mate}
                </label>
              )
            )}
          </div>
          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Room Type</h2>
            {[
              "Living Room",
              "Bedroom",
              "Dining Room",
              "Office",
              "Kids Room",
              "Kitchen",
            ].map((rt) => (
              <label key={rt} className="block mt-2">
                <input
                  type="checkbox"
                  checked={filters.roomType.includes(rt)}
                  onChange={() => handleFilterChange("roomType", rt)}
                  className="mr-2"
                />
                {rt}
              </label>
            ))}
          </div>
          <div>
            <h2 className=" text-xl font-[450] mt-3 py-2">Style</h2>
            {[
              "Modern",
              "Traditional",
              "Mid-Century",
              "Bohemian",
              "Rustic",
              "Minimalist",
              "Industrial",
              "Scandinavian",
            ].map((st) => (
              <label key={st} className="block mt-2">
                <input
                  type="checkbox"
                  checked={filters.style.includes(st)}
                  onChange={() => handleFilterChange("style", st)}
                  className="mr-2"
                />
                {st}
              </label>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4  ">
          <div className="flex md:justify-between justify-start md:items-center  flex-col md:flex-row  mb-6 max-[774px]:mb-4">
            <div className="md:hidden w-full my-2">
              <div className="flex justify-between gap-2 items-center">
                <div className="font-semibold text-xl w-1/2 ">
                  <div className="">
                    <div>
                      <button
                        onClick={() => (
                          setShowFilter(true),
                          (document.body.style.overflow = "hidden")
                        )}
                        className=" w-full py-3 cursor-pointer px-2 text-white bg-[#a91f64] shadow-md rounded-lg"
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
                {showFilter && (
                  <div className=" top-0 left-0 w-full bg-gray-800  flex justify-center items-center h-screen  z-50 overflow-hidden fixed">
                    <div className="w-[60%] bg-white h-[70%] rounded-xl shadow-md  shadow-white overflow-hidden ">
                      <div className="flex justify-between items-center px-6 py-4  border-b">
                        <h2 className="text-2xl font-semibold ">Filters</h2>
                        <div>
                          <IoCloseSharp
                            onClick={() => (
                              setShowFilter(false),
                              (document.body.style.overflow = "auto")
                            )}
                            size={30}
                            className="text-2xl font-bold cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className=" start relative overflow-y-auto max-h-[calc(70vh-64px)] px-4">
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 p-2">
                            Category
                          </h2>
                          {["Furniture", "Lighting", "Decor"].map((cate) => (
                            <label key={cate} className="block mt-2 ml-5">
                              <input
                                type="checkbox"
                                checked={filters.category.includes(cate)}
                                onChange={() =>
                                  handleFilterChange("category", cate)
                                }
                                className="mr-2"
                              />
                              {cate}
                            </label>
                          ))}
                        </div>
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 p-2">
                            Price Range
                          </h2>
                          {["$0 - $100", "$100 - $300", "$300+"].map(
                            (price) => (
                              <label key={price} className="block mt-2 ml-5">
                                <input
                                  type="checkbox"
                                  checked={filters.priceRange.includes(price)}
                                  onChange={() =>
                                    handleFilterChange("priceRange", price)
                                  }
                                  className="mr-2"
                                />
                                {price}
                              </label>
                            )
                          )}
                        </div>
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 p-2">
                            Availability
                          </h2>
                          {["In Stock", "Out of Stock"].map((avail) => (
                            <label key={avail} className="block mt-2 ml-5">
                              <input
                                type="checkbox"
                                checked={filters.availability.includes(avail)}
                                onChange={() =>
                                  handleFilterChange("availability", avail)
                                }
                                className="mr-2"
                              />
                              {avail}
                            </label>
                          ))}
                        </div>
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 p-2">
                            Material
                          </h2>
                          {[
                            "Wood",
                            "Metal",
                            "Fabric",
                            "Leather",
                            "Glass",
                            "Rattan",
                          ].map((mate) => (
                            <label key={mate} className="block mt-2 ml-4">
                              <input
                                type="checkbox"
                                checked={filters.material.includes(mate)}
                                onChange={() =>
                                  handleFilterChange("material", mate)
                                }
                                className="mr-2"
                              />
                              {mate}
                            </label>
                          ))}
                        </div>
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 py-2">
                            Room Type
                          </h2>
                          {[
                            "Living Room",
                            "Bedroom",
                            "Dining Room",
                            "Office",
                            "Kids Room",
                            "Kitchen",
                          ].map((rt) => (
                            <label key={rt} className="block mt-2 ml-5">
                              <input
                                type="checkbox"
                                checked={filters.roomType.includes(rt)}
                                onChange={() =>
                                  handleFilterChange("roomType", rt)
                                }
                                className="mr-2"
                              />
                              {rt}
                            </label>
                          ))}
                        </div>
                        <div>
                          <h2 className=" text-xl font-[450] mt-3 p-2">
                            Style
                          </h2>
                          {[
                            "Modern",
                            "Traditional",
                            "Mid-Century",
                            "Bohemian",
                            "Rustic",
                            "Minimalist",
                            "Industrial",
                            "Scandinavian",
                          ].map((st) => (
                            <label key={st} className="block mt-2  ml-5">
                              <input
                                type="checkbox"
                                checked={filters.style.includes(st)}
                                onChange={() => handleFilterChange("style", st)}
                                className="mr-2"
                              />
                              {st}
                            </label>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowFilter(false)}
                          className="w-full flex justify-center items-center py-3 font-bold text-lg  rounded-lg sticky bg-[#a91f64] text-white bottom-0 left-0"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-1/2  relative px-2 py-3 focus:ring-2 focus:ring-[#a91f64]  bg-white shadow-md rounded-lg">
                  <select
                    value={sortOrder}
                    onChange={(e) => handleOrder(e.target.value)}
                    className="w-full outline-none text-lg"
                  >
                    <option value="default">Sort</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 max-[774px]:text-base">
              Products List (12)
            </h2>
            <div className=" hidden min-[768px]:flex items-center gap-3">
              <span className="text-xl font-semibold pr-2">Sort by: </span>
              <select
                value={sortOrder}
                onChange={(e) => handleOrder(e.target.value)}
                className="p-3 text-md rounded-xl focus:outline-none  shadow-sm focus:ring-2 focus:ring-[#a91f64]  bg-white text-gray-900"
              >
                <option value="default">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
            {sortedProduct.map((product) => (
              <div
                key={product.id}
                className="max-[774px]:h-[240px] max-[774px]:[&>div>div:first-child]:h-[240px]
                max-[774px]:[&>div>div>h3]:py-2 max-[774px]:[&>div>span]:text-lg  max-[774px]:[&>div>div>svg]:textlg"
              >
                <ProductCard
                  id={product.id}
                  image={product.image}
                  text={product.text}
                  price={product.price}
                  category={product.category}
                  inStock={product.inStock}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

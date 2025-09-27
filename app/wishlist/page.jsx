/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../lib/cartSlice";
import { removeWishlist } from "../lib/wishlistSlice";

const Page = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList.items);

  const removeItem = (id) => {
    dispatch(removeWishlist(id));
  };

  const addToCartHandler = (item) => {
    const cartItem = { ...item, quantity: 1 };
    dispatch(addToCart(cartItem));
    dispatch(removeWishlist(item.id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Wishlist
      </h2>
      <p className="text-gray-600 mb-6">
        {wishlist.length} Items in your Wishlist
      </p>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        {wishlist.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-700">Your Wishlist is empty</p>
            <Link
              href="/Products"
              className="px-5 mt-4 py-3 inline-block bg-[#a91f64] text-white rounded-md hover:bg-[#8a1b54] text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-gray-700 font-semibold mb-4">
              <div>Product</div>
              <div>Price</div>
              <div>Stock</div>
              <div>Actions</div>
            </div>

            {wishlist.map((item, index) => (
              <div
                key={item.id || index}
                className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-start sm:items-center py-5 ${
                  index < wishlist.length - 1 ? "border-b border-gray-300" : ""
                }`}
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.text}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 font-medium text-sm sm:text-base truncate max-w-[160px] sm:max-w-[200px] md:max-w-[250px]">
                        {item.text}
                      </p>

                      <MdDelete
                        size={20}
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500 cursor-pointer sm:hidden"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 truncate max-w-[160px] sm:max-w-[200px]">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="text-gray-700 text-sm sm:text-base">
                  $
                  {(typeof item.price === "number" && !isNaN(item.price)
                    ? item.price
                    : 0
                  ).toFixed(2)}
                </div>

                <div className="text-sm sm:text-base">
                  <span className="sm:hidden text-xs font-medium text-gray-600">
                    Stock:
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold ${
                      item.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                  <span className="sm:hidden text-xs font-medium text-gray-600">
                    Actions:
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => addToCartHandler(item)}
                      disabled={!item.inStock}
                      className="bg-[#a91f64] text-white px-3 sm:px-2 py-2 rounded-md 
                        hover:bg-[#8a1b54] disabled:bg-gray-300 disabled:cursor-not-allowed 
                        text-sm sm:text-base w-full sm:w-auto"
                    >
                      Add to Cart
                    </button>

                    <MdDelete
                      onClick={() => removeItem(item.id)}
                      className="hidden sm:block text-gray-500 hover:text-red-600 cursor-pointer text-lg md:text-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;

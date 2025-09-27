/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantuty } from "../lib/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((item) => item.cart.items);

  const handleUpdateQuantity = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      dispatch(updateQuantuty({ id, quantity: newQuantity }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full min-h-[75vh] max-w-7xl mx-auto my-12 px-4">
      {/* Header */}
      <div className="p-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Shopping Bag
        </h1>
        <p className="text-gray-600">{totalItems} Items in the bag</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-md p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-700">Your cart is empty</p>
              <Link
                href="/Products"
                className="mt-4 inline-block bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] text-sm sm:text-base"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_auto_auto] gap-4 text-gray-700 font-semibold mb-4">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Action</div>
              </div>

              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_auto_auto] gap-4 items-start sm:items-center py-4 ${
                    index < cartItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4 w-full min-w-0">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.text}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-800 font-medium text-sm sm:text-base truncate max-w-[200px]">
                        {item.text}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="text-gray-700 text-sm sm:text-base w-full sm:w-auto">
                    <span className="sm:hidden font-semibold">Price: </span>${" "}
                    {item.price.toFixed(2)}
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="sm:hidden font-semibold">Quantity: </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-200 text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="w-7 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-200 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-gray-700 text-sm sm:text-base w-full sm:w-auto">
                    <span className="sm:hidden font-semibold">Total: </span>${" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="w-full sm:w-auto flex justify-start sm:justify-center">
                    <MdDelete
                      className="text-gray-500 hover:text-red-500 cursor-pointer text-lg"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Cart Summary
            </h4>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Coupon Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]"
                />
                <button className="bg-[#a91f64] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-[#8a1b54] text-sm sm:text-base cursor-pointer">
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-gray-700 mb-2 text-sm sm:text-base">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                disabled={cartItems.length === 0}
                className="w-full mt-4 bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

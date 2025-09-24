/** @format */
import Image from "next/image";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../lib/cartSlice";

const Card = ({ id, image, text, price, category, inStock }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);

  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace("$", "")) || 0
      : Number(price) || 0;

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
      toast.success("Removed from cart", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: " 12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    } else {
      dispatch(
        addToCart({
          id,
          image,
          text,
          price: numericPrice,
          quantity: 1,
          category,
          inStock,
        })
      );
      toast.success("Successfully Added To Cart", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: " 12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    }
  };

  return (
    <div
      className="bg-white relative p-3 w-full flex flex-col justify-between items-center rounded-xl shadow-md 
     hover:shadow-lg transition-shadow duration-300 h-[260px] sm:h-[280px] md:h-[300px]"
    >
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[220px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={text || "product-image"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="w-full mt-2 sm:mt-3 flex justify-between items-center px-1">
        <div className="w-2/3">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
            {text}
          </h3>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            {category}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
            ${numericPrice.toFixed(2)}
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3 text-gray-500">
          <i className="ri-heart-fill text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-red-500 transition-colors"></i>
          <i
            className={`ri-shopping-cart-2-fill text-2xl cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

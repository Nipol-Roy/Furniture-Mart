/** @format */
import Image from "next/image";
import data from "../../public/data/data";

const Catagories = () => {
  return (
    <>
      <div className="  grid gap-5 rounded-xl grid-cols-1 md:grid-cols-3 w-full ">
        {data.categories.map((categori, index) => (
          <div
            key={index}
            className="relative group h-80 w-full overflow-hidden rounded-2xl "
          >
            <Image
              src={categori.image}
              alt="catatories"
              className="object-cover rounded-xl  transition-transform duration-500 group-hover:scale-110"
              fill
            />
            <button className="group-hover:bg-red-500 cursor-pointer text-white px-5 py-3 text-sm md:text-lg absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl transition-transform duration-500">
              {categori.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catagories;

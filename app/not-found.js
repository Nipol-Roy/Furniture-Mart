/** @format */

import Link from "next/link";

const NotFound = () => {
  return (
    <div class="flex justify-center items-center h-[90vh] bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="
                text-[250px]
                font-extrabold
                text-transparent
                bg-cover
                bg-center
                [background-image:url('../public/homePageImages/OIP.jpeg')]
                [background-clip:text]
                [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))] 
                "
        >
          404
        </h1>
        <div className="">
          <div className=" flex flex-col justify-center items-center relative">
            <h1 className="text-xl w-full sm:text-2xl md:text-3xl  lg:text-3xl xl:text-5xl font-bold">
              Opps! Page Not Found
                      </h1>
                      <p className="p-5 w-full text-xl md:text-2xl max-w-lg  text-center">The page you are looking for cannot be found. take a break before trying again </p>
          </div>
        </div>
        <div className="py-4">
          <Link href="/" className="md:px-7 px-4 rounded-lg  py-3 text-lg font-bold bg-gray-400 text-black">
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

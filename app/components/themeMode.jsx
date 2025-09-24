/** @format */

"use client";

import { useState } from "react";

const ThemeMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      {darkMode ? (
        <i className="ri-moon-line  text-2xl lg:text-3xl hover:text-red-500 cursor-pointer"></i>
      ) : (
        <i className="ri-sun-line  text-2xl lg:text-3xl hover:text-red-500 cursor-pointer"></i>
      )}
    </div>
  );
};

export default ThemeMode;

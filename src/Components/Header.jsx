import React, { useContext, useEffect, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun_icon.svg";
import { Link } from "react-router-dom";
import ThemeContext from "../utils/ThemeContext";
const Header = () => {
  const { loggedInTheme, setTheme } = useContext(ThemeContext);
  if (loggedInTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  // console.log(loggedInTheme);
  const toggleTheme = () => {
    setTheme(loggedInTheme === "light" ? "dark" : "light");
    loggedInTheme === "light"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <div>
      <div
        className={`flex flex-row items-center justify-between px-3 sm:px-5 lg:px-[8rem] py-6 shadow-xl sm:shadow-2xl fixed top-0 z-40 w-full bg-white dark:bg-[hsl(209,23%,22%)]`}
      >
        <Link to="/">
          <h1
            className={`text-base sm:text-lg font-semibold text-[#000] dark:text-[#fff]`}
          >
            Wher in the world?
          </h1>
        </Link>
        <div
          className="flex flex-row items-center justify-end gap-x-2 cursor-pointer"
          onClick={toggleTheme}
        >
          {loggedInTheme === "dark" ? (
            <img className="" src={sun} alt="" />
            ) : (
            <img src={moon} alt="" />
          )}
          <h1 className={`text-base text-[#000] font-semibold dark:text-[#fff]`}>
            {loggedInTheme === "dark" ? "Light": "Dark"} Mode
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

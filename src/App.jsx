import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import search from "./assets/search.svg";
import Header from "./Components/Header";
import data from "./utils/data.json";
import ThemeContext from "./utils/ThemeContext";

function App() {
  const [exactData, setExactData] = useState(data);
  const [inputText, setInputText] = useState("");
  const {loggedInTheme} = useContext(ThemeContext);

  // console.log(loggedInTheme)
  const handleChange = (e) => {
    // console.log(e.target.value);
    const filterCountries = data.filter((country) =>
      country.region.toLowerCase().includes(e.target.value.toLowerCase())
    );
    // console.log(filterCountries)
    setExactData(filterCountries);
  };

  useEffect(() => {
    // console.log(inputText);
    const searchCountry = data.filter((country) =>
      country.name.toLowerCase().includes(inputText.toLowerCase())
    );
    // console.log(searchCountry);
    setExactData(searchCountry);
  }, [inputText]);
  return (
    <div className={`w-[100vw] h-screen overflow-x-hidden -z-[60] font-Nunito bg-[#fff] dark:bg-[hsl(207,26%,17%)]`}>
      <div className="w-full">
        <Header />
        <div className={`w-full px-3 sm:px-5 lg:px-[8rem] py-6 sm:py-[2rem] flex flex-col gap-y-6 md:flex-row lg:items-center justify-between mt-24`}>
          <div className="w-full relative ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search For Country.."
              className={`pl-14 py-3 w-[100%] md:w-[40%] top-0 rounded-lg border-none shadow-lg text-black dark:text-white  dark:bg-[hsl(209,23%,22%)]`}
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
            <img
              className=" absolute z-20 top-[0.8rem]  left-6 "
              src={search}
              alt=""
            />
          </div>
          <div className=" cursor-pointer">
            <select
              name=""
              id=""
              className={`font-semibold outline-none shadow-xl border-none flex flex-col px-4 py-2 rounded-md bg-white gap-y-6 text-[#000] dark:text-[#fff] dark:bg-[hsl(209,23%,22%)]`}
              onChange={handleChange}
            >
              <option className="font-medium" value="">
                Filter By Region
              </option>
              <option className="font-medium" value="africa">
                Africa
              </option>
              <option className="font-medium" value="america">
                America
              </option>
              <option className="font-medium" value="asia">
                Asia
              </option>
              <option className="font-medium" value="europe">
                Europe
              </option>
              <option className="font-medium" value="oceania">
                Oceania
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 px-3 py-4 sm:px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-[100%] sm:gap-[2rem] md:gap-[3rem] xl:gap-[5rem] items-center justify-between lg:px-[8rem] sm:py-6 overflow-hidden">
          {exactData.map((country, index) => (
            <Link to={`/country/${country.alpha3Code}`} key={index}>
              <div
                
                className={`sm:h-[20rem] shadow-xl rounded-lg overflow-hidden bg-white ${loggedInTheme}:bg-[hsl(209,23%,22%)]`}
              >
                <div className="w-[100%] sm:h-[10rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover sm:object-top"
                    src={country.flags.svg}
                    alt=""
                  />
                </div>
                <div className={`flex flex-col justify-between mt-3 py-5 lg:py-0 pl-3 text-[#000] ${loggedInTheme}:text-[#fff]`}>
                  <h1 className="font-bold text-lg mb-3">{country.name}</h1>
                  <p>
                    <span className="text-sm font-semibold">Population: </span>
                    <span className="font-[300]">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="text-sm font-semibold">Region: </span>
                    <span className="font-[300]">{country.region}</span>
                  </p>
                  <p>
                    <span className="text-sm font-semibold">Capital: </span>
                    <span className="font-[300]">{country.capital}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

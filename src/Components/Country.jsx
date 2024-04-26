import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import data from "../utils/data.json";
import { Link, useParams } from "react-router-dom";
import back from "../assets/back.svg";
import Wback from "../assets/backWhite.svg";
import ThemeContext from "../utils/ThemeContext";

const Country = () => {
  const { countryId } = useParams();
  const {loggedInTheme} = useContext(ThemeContext)
  // console.log(countryId);
  const [countryData, setCountryData] = useState();
  const [updatedCountryId, setUpdatedCountryId] = useState(countryId);
  // console.log(countryData[0].name)
  // console.log(countryId);
  useEffect(() => {
    const exactCountry = data.filter((country) =>
      country.alpha3Code.toLowerCase().includes(updatedCountryId.toLowerCase())
    );
    // console.log(exactCountry);
    setCountryData(exactCountry);
  }, []);
  useEffect(() => {
    setUpdatedCountryId(countryId);
  }, [countryId]);
  return (
    <div className="text-black bg-white font-Nunito dark:text-white dark:bg-[hsl(207,26%,17%)]">
      <Header />
      {countryData && (
        <div className="mt-[4rem]  md:mt-0 md:pt-28 px-5 sm:px-[8rem] min-h-screen lg:h-screen">
          <div className="pt-8 md:pt-0 mb-9 md:mb-16">
            <Link
              to="/"
              className="flex flex-row items-center w-fit px-4 py-2 shadow-md rounded-lg gap-x-4 border-none bg-transparent dark:bg-[hsl(209,23%,22%)]"
            >
              {loggedInTheme==="dark" ? <div className="flex flex-row items-center gap-x-4"><img src={Wback} alt="" /> <span>Back</span> </div> : <div className="flex flex-row items-center gap-x-4"><img src={back} alt="" /> <span>Back</span></div> }
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="md:w-[100%] lg:w-[45%]">
              <img className="w-[100%]" src={countryData[0].flags.svg} alt="" />
            </div>
            <div className="lg:pl-40 flex flex-col gap-y-3 pt-8 lg:pt-0">
              <h1 className="text-black text-xl sm:text-2xl font-extrabold dark:text-white">
                {countryData[0].name}
              </h1>
              <div className="pt-2 sm:pt-3 md:pt-6 text-sm sm:text-base">
                <strong>Native Name:</strong> {countryData[0].name}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Population:</strong>{" "}
                {countryData[0].population.toLocaleString()}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Region:</strong> {countryData[0].region}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Sub Region:</strong> {countryData[0].subregion}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Capital:</strong> {countryData[0].capital}
              </div>
              <div className=" text-sm sm:text-base mt-6">
                <strong>Top Level Domain:</strong>{" "}
                {countryData[0].topLevelDomain}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Currencies:</strong> {countryData[0].currencies[0].name}
              </div>
              <div className=" text-sm sm:text-base">
                <strong>Languages:</strong> {countryData[0].languages[0].name}
              </div>
              <div className=" text-[0.95rem] sm:text-[1.2rem]">
                <strong>Border Countries:</strong>
                <div className="flex flex-wrap gap-3 text-sm pb-8 lg:pb-0">
                  {countryData[0].borders === undefined ? (
                    <div>There Is No Boreder</div>
                  ) : (
                    countryData[0].borders.map((ele) => (
                        <p className="py-1 px-2 mt-2 bg-[#e4e3e3f3] text-sm sm:text-base rounded-md dark:bg-[hsl(209,23%,22%)]">
                          {ele}
                        </p>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;

import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Country from "./Components/Country";
import Error from "./Components/Error";
import ThemeContext from "./utils/ThemeContext";

const MainApp = () => {
  const [theme, setTheme] = useState();
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme("dark")
    }
    else{
      setTheme("light");
    }
  }, []);
  const appRouteer = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/country/:countryId",
      element: <Country />,
    },
    {
      errorElement: <Error />,
    },
  ]);

  return (
    <ThemeContext.Provider value={{loggedInTheme: theme, setTheme }}>
        <RouterProvider router={appRouteer} />
    </ThemeContext.Provider>
  );
};

export default MainApp;

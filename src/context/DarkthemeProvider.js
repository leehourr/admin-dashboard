import React, { useEffect, useState } from "react";
import DarkthemContext from "./Darktheme-context";

const DarkthemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  // console.log("in provider", isDark);
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleDarktheme = (toggle) => {
    setIsDark(toggle);
  };
  const value = {
    darktheme: isDark,
    toggleDarktheme,
  };
  return (
    <DarkthemContext.Provider value={value}>
      {props.children}
    </DarkthemContext.Provider>
  );
};

export default DarkthemeProvider;

import React, { useState } from "react";
import DarkthemContext from "./Darktheme-context";

const DarkthemeProvider = (props) => {
  const [isDark, setIsDark] = useState(undefined);

  console.log("in provider", isDark);
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

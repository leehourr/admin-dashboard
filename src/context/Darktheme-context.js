import React from "react";

const DarkthemContext = React.createContext({
  darktheme: false,
  toggleDarktheme: () => {},
});

export default DarkthemContext;
